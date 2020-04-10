import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                {/* Font Awesome */}
                <link rel="stylesheet" href="/static/plugins/fontawesome-free/css/all.min.css" />
                {/* Ionicons */}
                <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
                {/* overlayScrollbars */}
                <link rel="stylesheet" href="/static/dist/css/adminlte.min.css" />
                {/* Google Font: Source Sans Pro */}
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
                <body className="hold-transition sidebar-mini">
                    <Main />
                    <NextScript />
                </body>
                <script src="./static/plugins/jquery/jquery.min.js"></script>
                <script src="./static/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="./static/dist/js/adminlte.min.js"></script>
            </Html>
        )
    }
}
