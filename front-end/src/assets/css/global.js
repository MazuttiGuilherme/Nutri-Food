import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html, body, #root {
    height: 100%;
}

#root {
    display: flex;
    flex-direction: column;
}

:root {
	--main-color:#9be198;
    --secondary-color: #B02C0C;
}

#root > main {
    flex: 1;
}

btn-green {
    background-color: var(--secondary-color);
}

.btn-primary {
    color: #fff;
    background-color: var(--secondary-color);
    border-color: var(--secondary-color); /*set the color you want here*/
}
.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open>.dropdown-toggle.btn-primary {
    color: #fff;
    background-color: var(--main-color);
    border-color: var(--main-color);
}html, body, #root {
    height: 100%;
}

#root {
    display: flex;
    flex-direction: column;
}

:root {
	--main-color:#9be198;
    --secondary-color: #B02C0C;
}

#root > main {
    flex: 1;
}

btn-green {
    background-color: var(--secondary-color);
}

.btn-primary {
    color: #fff;
    background-color: var(--secondary-color);
    border-color: var(--secondary-color); /*set the color you want here*/
}
.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open>.dropdown-toggle.btn-primary {
    color: #fff;
    background-color: var(--main-color);
    border-color: var(--main-color);
}
`