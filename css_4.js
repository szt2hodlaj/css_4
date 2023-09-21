const widthInput = document.getElementById('widthInput');
const heightInput = document.getElementById('heightInput');
const changeSizeBtn = document.getElementById('changeSizeBtn');

// CSS változó elérése
const root = document.querySelector(':root');

// Gomb kattintás eseménykezelő
changeSizeBtn.addEventListener('click', () => {
    // Szélesség és magasság értékek lekérése az inputokból
    const newWidth = widthInput.value + 'px';
    const newHeight = heightInput.value + 'px';
    
    // CSS változók módosítása az új méretekre
    root.style.setProperty('--box-width', newWidth);
    root.style.setProperty('--box-height', newHeight);
});