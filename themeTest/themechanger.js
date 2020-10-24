{
    const themeButton = document.querySelector('#theme');
    const themeCSS = document.querySelector('#current-theme');

    let xml = new XMLHttpRequest();
    xml.onreadystatechange = () => {
        if (xml.readyState === 4 && xml.status === 200){
            const themes = xml.responseText.split(',');

            const prefix = 'themes/';
            let current_theme = themes[0];
            const suffix = '-theme';
            const ext = '.css';
            
            window.onload = () => {
                themeCSS.href = prefix+current_theme+suffix+ext;
                themeButton.innerHTML = (current_theme +' '+ suffix.replace('-', '')).toUpperCase();
                if (themeButton.innerHTML[0] == '.'){
                    themeButton.innerHTML = themeButton.innerHTML.replace('.', '')
                }
            }
        
            function change_theme(){
                current_theme = themes[themes.indexOf(current_theme)+1];
                if (themes.indexOf(current_theme)+1 == 0){
                    current_theme = themes[0];
                }
                return (prefix + current_theme + suffix + ext);
            }
            
        
            themeButton.onclick = () => {
                themeCSS.href = change_theme();
                themeButton.innerHTML = (current_theme +' '+ suffix.replace('-', '')).toUpperCase();
                if (themeButton.innerHTML[0] == '.'){
                    themeButton.innerHTML = themeButton.innerHTML.replace('.', '')
                };
                if (themeButton.innerHTML.toLocaleLowerCase() == 'hungry theme'){
                    themeButton.innerHTML += '™';
                };
            };
        };
    };
    xml.open('POST', 'getthemes.php');
    xml.send();


};