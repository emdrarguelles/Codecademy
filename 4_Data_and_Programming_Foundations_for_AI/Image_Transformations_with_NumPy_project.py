import numpy as np
import matplotlib.pyplot as plt
import codecademylib3

heart_img = np.array([[255,0,0,255,0,0,255],
              [0,255/2,255/2,0,255/2,255/2,0],
          [0,255/2,255/2,255/2,255/2,255/2,0],
          [0,255/2,255/2,255/2,255/2,255/2,0],
              [255,0,255/2,255/2,255/2,0,255],
                  [255,255,0,255/2,0,255,255],
                  [255,255,255,0,255,255,255]])

# This is a helper function that makes it easy for you to show images!
def show_image(image, name_identifier):
  plt.imshow(image, cmap="gray")
  plt.title(name_identifier)
  plt.show()

# Show heart image
show_image(heart_img, "Heart Image")
#(6, 6) — bottom right = 255 (White)
#(3, 3) — center = 255/2 (Gray)
#(1, 3) — right below top center = 0 (Black)

# Invert color
inverted_heart_img = 255 - heart_img 
show_image(inverted_heart_img, "Inverted Heart Image")

# Rotate heart
rotated_heart_img = heart_img.T
show_image(rotated_heart_img, "Rotated Heart Image")

# Random Image
random_img = np.random.randint(0,255, (7,7))
show_image(random_img, "Random Image")

x = np.linalg.solve(random_img, heart_img)
show_image(x, "x")

# Solve for heart image
solved_heart_img = random_img@x
show_image(solved_heart_img, "Solved Heart Image")

# Extra
# Create a new shape with a NumPy array.
diamond_img = np.array([[255,255,255,0,255,255,255],
                      [255,255,0,255/2,0,255,255],
                  [255,0,255/2,255/2,255/2,0,255],
              [0,255/2,255/2,255/2,255/2,255/2,0],
                  [255,0,255/2,255/2,255/2,0,255],
                      [255,255,0,255/2,0,255,255],
                      [255,255,255,0,255,255,255]])
show_image(diamond_img, "Diamond")
# Transform your image with a permutation matrix.
P_horizontal = np.array([[0,0,0,0,0,0,1],
                        [0,0,0,0,0,1,0],
                        [0,0,0,0,1,0,0],
                        [0,0,0,1,0,0,0],
                        [0,0,1,0,0,0,0],
                        [0,1,0,0,0,0,0],
                        [1,0,0,0,0,0,0]])

transformed_image = P_horizontal@diamond_img
show_image(transformed_image, "Horizontal Diamond")
# Change the color scheme from grayscale. Check the cmap parameter of the imshow() function.
plt.imshow(diamond_img, cmap='jet') 
plt.show()
plt.close()

# Create a complicated image with more pixels and/or a shape that is not a square matrix.
staff_img = np.array([[255,255,255,0,255,255,255],
                      [255,255,0,255/2,0,255,255],
                  [255,0,255/2,200,255/2,0,255],
              [0,255/2,200,280,200,255/2,0],
                  [255,0,255/2,200,255/2,0,255],
                      [255,255,0,255/2,0,255,255],
                      [255,255,255,0,255,255,255],
                      [255,255,255,50,255,255,255],
                      [255,255,255,50,255,255,255],
                      [255,255,255,50,255,255,255],
                      [255,255,255,50,255,255,255],
                      [255,255,255,50,255,255,255],
                      [255,255,255,50,255,255,255],
                      [255,255,255,0,255,255,255]])
show_image(staff_img, "Healing Staff")
plt.imshow(staff_img, cmap='viridis') 
plt.show()
plt.close()