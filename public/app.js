document.getElementById('generateBtn').addEventListener('click', generateImage);

function generateImage() {
    const text = document.getElementById('text').value;
    const bgColor = document.getElementById('bgColor').value;
    const icon = document.getElementById('icon').value;
    const preview = document.getElementById('preview');

    preview.innerHTML = ''; // Clear previous content
    preview.style.backgroundColor = bgColor;

    const iconElement = document.createElement('div');
    iconElement.innerText = getIcon(icon);
    iconElement.style.fontSize = '50px';

    const textElement = document.createElement('div');
    textElement.innerText = text;
    textElement.style.marginTop = '10px';

    preview.appendChild(iconElement);
    preview.appendChild(textElement);
}

function getIcon(iconName) {
    switch (iconName) {
        case 'star':
            return '⭐';
        case 'heart':
            return '❤️';
        case 'smile':
            return '😊';
        default:
            return '';
    }
}
