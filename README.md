Here is your **updated `README.md`** with all the required improvements:

---

# 📖 Development of a Machine Learning Algorithm for Restoring Damaged Images

This repository contains the code, model, dataset preparation scripts, and web application for the Bachelor's thesis project titled **"Development of a Machine Learning Algorithm for Restoring Damaged Images"** by Andy Younes at the National Polytechnic University of Armenia.

---

## 📌 Project Overview

This project proposes a **hybrid image restoration algorithm** that integrates:

* 🔧 **Traditional image processing methods** (e.g., deblurring, denoising, inpainting)
* 🤖 **Machine learning techniques** (CNNs, U-Nets, GANs, and Deep Image Prior)
* 🌐 **Web automation using Flask and JavaScript**

It restores images degraded by:

* Noise
* Blur
* Pixelation
* Color loss

The hybrid model is trained on a diverse dataset of degraded images and leverages both deterministic rules and data-driven neural networks to restore image quality.

---

## 🔄 Process Overview

### Step-by-Step Image Restoration Pipeline

1. **Image Acquisition**
   Upload or acquire a degraded image using a camera or scanner.

2. **Image Degradation Model**
   Recognize degradation factors: noise, blur, or missing areas (inpainting).

3. **Restoration Algorithm Selection**
   Based on the degradation, apply:

   * Denoising (filter/CNN)
   * Deblurring (deconvolution)
   * Inpainting (GANs or diffusion)

4. **Preprocessing**
   Resize, normalize, and prepare images for the model.

5. **Apply Restoration Algorithm**
   Hybrid restoration using a fusion of traditional and machine learning methods.

6. **Postprocessing**
   Sharpen, enhance contrast, or color-correct the output.

7. **Evaluation**
   Use PSNR, SSIM, MSE to assess performance.

8. **Use Cases**
   Medical imaging, satellite images, digital forensics, photography.

---

## 🧠 Core Components

* `HybridImageRestorationModel`: Combines CNNs and traditional filters.
* `HybridImageRestorationDataset`: Applies synthetic degradations to clean images.
* `Flask API`: Lets users upload and restore images via a browser interface.
* Web Interface: HTML/JavaScript-based GUI with drag-and-drop and live preview.
* Metrics: PSNR, SSIM, MSE with Matplotlib visualizations.

---

## 🖼️ Visual Examples

### ✅ Flowchart: How the Hybrid Model Works

<img src="" width="80%" alt="Hybrid Restoration Flowchart">

---

### 🧪 Before vs. After Restoration (Sample Result)

<img src="" width="70%" alt="Blurred to Restored Image">

---

### 💻 Web Application Interface

**Main page** – Upload and restore:

<img src="" width="80%" alt="Web App Interface">

**Choose from degraded samples:**

<img src="" width="80%" alt="Image Selector Example">

**Restoration model output:**

<img src="" width="80%" alt="Model Output Display">

---

### 📉 Training Performance

Training vs. validation loss curves (100 epochs):

<img src="" width="60%" alt="Loss Curves">

---

## 🗃️ Suggested Directory Structure

```
📂 hybrid-image-restoration/
├── 📁 dataset/
│   ├── clean/
│   └── degraded/
├── 📁 model/
│   ├── hybrid_model.py
│   └── weights.pth
├── 📁 static/
│   └── restored_images/
├── 📁 templates/
│   └── index.html
├── 📄 app.py
├── 📄 requirements.txt
└── 📄 README.md
```

---

## 🧪 Evaluation Metrics

| Metric      | Description                 |
| ----------- | --------------------------- |
| **PSNR**    | Peak Signal-to-Noise Ratio  |
| **MSE**     | Mean Squared Error          |
| **SSIM**    | Structural Similarity Index |
| **Runtime** | Inference time per image    |

---

## 💻 Technologies Used

| Domain            | Tools/Libraries                    |
| ----------------- | ---------------------------------- |
| Programming       | Python, JavaScript, HTML/CSS       |
| ML/DL Frameworks  | PyTorch, TensorFlow\.js (optional) |
| Image Processing  | OpenCV, PIL                        |
| Classical Filters | Wiener, Bilateral, BM3D            |
| Web & API         | Flask, RESTful API, Express.js     |
| Visualization     | Matplotlib                         |

---

## 🚀 Getting Started

1. **Clone the repo**:

   ```bash
   git clone https://github.com/yourusername/hybrid-image-restoration.git
   cd hybrid-image-restoration
   ```

2. **Install dependencies**:

   ```bash
   ```

3. **Start the Flask app**:

   ```bash
   ```

4. **Open in browser**:

   ```
   http://localhost:5000
   ```

---

