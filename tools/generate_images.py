import os, sys

def create_svg(path, width, height, label):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    svg = f"""<svg xmlns='http://www.w3.org/2000/svg' width='{width}' height='{height}' viewBox='0 0 {width} {height}'>
<rect width='100%' height='100%' fill='#cccccc'/>
<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='{min(width, height)//10}' fill='#333'>{label}</text>
</svg>"""
    with open(path, 'w') as f:
        f.write(svg)

if __name__ == '__main__':
    if len(sys.argv) < 5:
        print('usage: generate_images.py output_path width height label')
        sys.exit(1)
    create_svg(sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4])
