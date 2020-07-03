export default PreloaderStyles = styled.preloader`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	text-align: center;
	background: #181818;
	z-index: 1000;

    .spinner {
        position: absolute;
        left: 50%;
        top: 0;
        width: 1px;
        height: 100%;
    }

    .spinner .double-bounce1,
    .spinner .double-bounce2 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.05);
    }

    .spinner .double-bounce2 {
        background: rgba(255, 255, 255, 0.15);
        height: 0;
        -webkit-animation: loading 2s infinite ease-in-out;
        animation: loading 2s infinite ease-in-out;
    }
`