import sys
from PIL import Image

def remove_white_background(img_path):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # If the pixel is close to white, make it transparent
        # Threshold: if all R, G, B are > 235
        if item[0] > 235 and item[1] > 235 and item[2] > 235:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(img_path, "PNG")
    print(f"Removed white background from {img_path}")

if __name__ == "__main__":
    remove_white_background("public/images/decor/vintage_book.png")
