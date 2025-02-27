import numpy as np
import matplotlib.pyplot as plt
from PIL import Image

# Step 1: Load and process the input PNG image
def load_image_as_grayscale(image_path, radius):
    # Load image using Pillow
    image = Image.open(image_path).convert("L")  # Convert to grayscale
    # Resize image to fit within the circle grid
    image = image.resize((2 * radius + 1, 2 * radius + 1))
    # Normalize pixel values to range [0, 1]
    return np.array(image) / 255.0

# Step 2: Define the circle parameters
radius = 100  # Radius of the circle
grid_size = 2 * radius + 1
nails = 80  # Number of nails on the circle

# Step 3: Generate thread intensity matrices
angles = np.linspace(0, 2 * np.pi, nails, endpoint=False)
nail_coordinates = [(int(radius * np.cos(a)), int(radius * np.sin(a))) for a in angles]
pixel_indices = [(x, y) for y in range(-radius, radius + 1) for x in range(-radius, radius + 1) if x**2 + y**2 <= radius**2]
T = []

for start in nail_coordinates:
    for end in nail_coordinates:
        if start != end:
            thread_matrix = np.zeros((grid_size, grid_size))
            x0, y0 = start
            x1, y1 = end
            
            # Binary intensity: Set 1 for the line, 0 elsewhere
            for px, py in pixel_indices:
                dx = abs(px * (y1 - y0) - py * (x1 - x0) + x1 * y0 - y1 * x0) / np.hypot(y1 - y0, x1 - x0)
                if dx <= 0.9:  # Threshold for considering pixel as part of the line
                    thread_matrix[py + radius, px + radius] = 1.0
            
            T.append(thread_matrix.flatten())

T = np.array(T).T  # Convert list of column vectors to matrix

# Step 4: Load target image and flatten it
image_path = "string.png"  # Replace with your PNG file path
target_image = load_image_as_grayscale(image_path, radius)
target_vector = target_image.flatten()

# Step 5: Solve the optimization problem
w, _, _, _ = np.linalg.lstsq(T, target_vector, rcond=None)

# Step 6: Reconstruct the image
reconstructed_image = np.dot(T, w).reshape(grid_size, grid_size)

# Flip both input and output images vertically (upside down)
flipped_target_image = np.flipud(target_image)
flipped_reconstructed_image = np.flipud(reconstructed_image)

# Visualize and save the flipped target and reconstructed images as SVG
plt.figure(figsize=(12, 6))

# Target Image (Flipped)
plt.subplot(1, 2, 1)
plt.imshow(flipped_target_image, cmap="gray", origin="lower", extent=(-radius, radius, -radius, radius))
plt.axis('off')  # Remove axis labels and ticks
plt.title("Target Image (Flipped)")

# Reconstructed Image (Flipped)
plt.subplot(1, 2, 2)
plt.imshow(flipped_reconstructed_image, cmap="gray", origin="lower", extent=(-radius, radius, -radius, radius))
plt.axis('off')  # Remove axis labels and ticks
plt.title("Reconstructed Image (Flipped)")

# Save as SVG file
plt.savefig("string_art_reconstruction_flipped.svg", format="svg", bbox_inches='tight')
plt.show()
