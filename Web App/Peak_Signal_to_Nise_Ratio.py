import sys, os
import math
import tensorflow as tf
import numpy as np
import pandas as pd
import cv2
import matplotlib as mpl
import matplotlib.pyplot as plt
import skimage

# version check
print('Python: {}'.format(sys.version))
print('Numpy: {}'.format(np.__version__))
print('Pandas: {}'.format(pd.__version__))
print('OpenCV: {}'.format(cv2.__version__))
print('Tensorflow: {}'.format(tf.__version__))
print('Matplotlib: {}'.format(mpl.__version__))
print('Scikit-Image: {}'.format(skimage.__version__))

#PSNR
def psnr(target, ref):
    # Assume target is RGB/BGR image
    target_data = target.astype(np.float32)
    ref_data = ref.astype(np.float32)
    
    diff = ref_data - target_data
    diff = diff.flatten('C')
    
    rmse = np.sqrt(np.mean(diff ** 2.))
    
    return 20 * np.log10(255. / rmse)

#MSE
def mse(target, ref):
    target_data = target.astype(np.float32)
    ref_data = ref.astype(np.float32)
    err = np.sum((target_data - ref_data) ** 2)
    
    err /= np.float(target_data.shape[0] * target_data.shape[1])
    return err

#Structural Similarity
from skimage.metrics import structural_similarity as ssim

'''
After we defined our metrics for measuring image quality, we need to combine whole metrics in one metric.
'''
def compare_images(target, ref):
    scores = []
    scores.append(psnr(target, ref))
    scores.append(mse(target, ref))
    scores.append(ssim(target, ref, multichannel=True))
    return scores

'''
We need to check the functionality of our metric function, and it requires target and reference image to compare. Thankfully, the original paper published its source code (implemented in Matlab and Caffe) and dataset image in here. So we can use it. For the convenience, I downloaded image folder(named Train and Test) into new directory (dataset\SRCNN_dataset)

Then how can we make distorted image from the raw data. It is just simple. After resize down the original image, resize it again to previous width height, then the resolution will be lower since the pixel information may loss during resize.
'''
def prepare_images(path, factor):
    # Loop through the files in the directory
    for file in os.listdir(path):
        image = cv2.imread(path + '/' + file)
        
        # Find old and new image dimensions
        h, w, c = image.shape
        new_height = int(h / factor)
        new_width = int(w / factor)
        
        # Resize down the image
        image = cv2.resize(image, (new_width, new_height), interpolation=cv2.INTER_LINEAR)
        
        # Resize up the image
        image = cv2.resize(image, (w, h), interpolation=cv2.INTER_LINEAR)
        
        # Save the image
        try:
            os.listdir(path + '/../../resized')
        except:
            os.mkdir(path + '/../../resized')
            
        cv2.imwrite(path + '/../../resized/{}'.format(file), image)

prepare_images('./dataset/SRCNN_dataset/Test/Set14', 2)

from PIL import Image
fig, ax = plt.subplots(1, 2, figsize=(15, 10))
ax[0].imshow(Image.open('./dataset/SRCNN_dataset/Test/Set14/barbara.bmp'))
ax[0].title.set_text('Original Image')
ax[1].imshow(Image.open('./dataset/SRCNN_dataset/resized/barbara.bmp'))
ax[1].title.set_text('Resized Image')
plt.show()

'''
Maybe you can see right image is slightly blurred compared with left image. If we cannot make sure, just use metric function that defined previously.
'''
# show target of the image and src
target = cv2.imread('./dataset/SRCNN_dataset/Test/Set14/barbara.bmp')
ref = cv2.imread('./dataset/SRCNN_dataset/resized/barbara.bmp')

metrics = compare_images(target, ref)
print("PSNR: {}".format(metrics[0]))
print("MSE: {}".format(metrics[1]))
print("SSIM: {}".format(metrics[2]))