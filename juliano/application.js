//# sourceURL=application.js

/*
 application.js
 TestTVML
 
 Copyright (c) 2017 Juliano Martins. All rights reserved.
 */

/*
 * This file provides an example skeletal stub for the server-side implementation
 * of a TVML application.
 *
 * A javascript file such as this should be provided at the tvBootURL that is
 * configured in the AppDelegate of the TVML application. Note that  the various
 * javascript functions here are referenced by name in the AppDelegate. This skeletal
 * implementation shows the basic entry points that you will want to handle
 * application lifecycle events.
 */

/**
 * @description The onLaunch callback is invoked after the application JavaScript
 * has been parsed into a JavaScript context. The handler is passed an object
 * that contains options passed in for launch. These options are defined in the
 * swift or objective-c client code. Options can be used to communicate to
 * your JavaScript code that data and as well as state information, like if the
 * the app is being launched in the background.
 *
 * The location attribute is automatically added to the object and represents
 * the URL that was used to retrieve the application JavaScript.
 */
App.onLaunch = function(options) {
    var alert = createAlert("Hello World!", "Welcome to tvOS");
    navigationDocument.pushDocument(alert);
}


App.onWillResignActive = function() {
    
}

App.onDidEnterBackground = function() {
    
}

App.onWillEnterForeground = function() {
    
}

App.onDidBecomeActive = function() {
    
}

App.onWillTerminate = function() {
    
}


function playMedia(videourl, mediaType) {
    // var videourl = baseURL + extension;
    var singleVideo = new MediaItem(mediaType, videourl);
    var videoList = new Playlist();
    videoList.push(singleVideo);
    var myPlayer = new Player();
    myPlayer.playlist = videoList;
    myPlayer.play();
}



/**
 * This convenience funnction returns an alert template, which can be used to present errors to the user.
 */
var createAlert = function(title, description) {
    
    var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
    <catalogTemplate>
    <banner>
    <title>Apple TV - NetFlix fundo de quintal</title>
    </banner>
    <list>
    <section>
    <listItemLockup>
    <title>Filmes</title>
    <decorationLabel>6</decorationLabel>
    <relatedContent>
        <grid>
            <section>
                <lockup onselect="playMedia('http://trailers.apple.com/movies/fox/avatar/avatar2009aug0820a-tsr_h480p.mov', 'video')">
                    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg" width="250" height="376" />
                    <title>Avatar</title>
                </lockup>
                <lockup onselect="playMedia('http://pdl.warnerbros.com/wbmovies/gravity/trailer1/GRAVITY%20-%20TRAILER%201A%202D-480.mov', 'video')">
                    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg" width="250" height="376" />
                    <title>Gravidade</title>
                </lockup>
                <lockup onselect="playMedia('http://trailers.apple.com/movies/wb/inception/inception-tlr1_h480p.mov', 'video')">
                    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg" width="250" height="376" />
                    <title>A Origem</title>
                </lockup>
                <lockup onselect="playMedia('http://assets.ign.com/videos/zencoder/1280/d0ad423553a73a8410937e4c874ecd38-3000000-1343954686-w.mp4', 'video')">
                    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg" width="250" height="376" />
                    <title>O Cavaleiro das Trevas</title>
                </lockup>
                <lockup onselect="playMedia('http://trailers.apple.com/movies/paramount/interstellar/interstellar-tsr1_h480p.mov', 'video')">
                    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY1000_CR0,0,640,1000_AL_.jpg" width="250" height="376" />
                    <title>Interestelar</title>
                </lockup>
                <lockup onselect="playMedia('http://trailers.apple.com/movies/newline/lord_of_the_rings/lotr_first_teaser_mitmsm480.mov', 'video')">
                    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BYWY1ZWQ5YjMtMDE0MS00NWIzLWE1M2YtODYzYTk2OTNlYWZmXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SY1000_SX668_AL_.jpg" width="250" height="376" />
                    <title>O Senhor dos Anéis</title>
                </lockup>
                <lockup onselect="playMedia('http://trailers.apple.com/movies/lucasfilm/345p9o8sgh7890-342/r2w_h480p.mov', 'video')">
                    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY1000_CR0,0,664,1000_AL_.jpg" width="250" height="376" />
                    <title>Guerra nas Estrelas</title>
                </lockup>
                <lockup onselect="playMedia('http://trailers.apple.com/movies/wb/matrix_reloaded/matrix_reloaded_m480.mov', 'video')">
                    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg" width="250" height="376" />
                    <title>Matrix</title>
                </lockup>
            </section>
        </grid>
    </relatedContent>
    </listItemLockup>
    <listItemLockup>
    <title>Séries</title>
    <decorationLabel>6</decorationLabel>
    <relatedContent>
        <grid>
            <section>
                <lockup onselect="playMedia('', 'video')">
                    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BZDNhNzhkNDctOTlmOS00NWNmLWEyODQtNWMxM2UzYmJiNGMyXkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_.jpg" width="250" height="376" />
                    <title>Breaking Bad</title>
                </lockup>
                <lockup onselect="playMedia('', 'video')">
                    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTczMDk1NDYyMV5BMl5BanBnXkFtZTgwNjE1NDU4MDI@._V1_.jpg" width="250" height="376" />
                    <title>The Walking Dead</title>
                </lockup>
                <lockup onselect="playMedia('', 'video')">
                    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTEyODk5NTc2MjNeQTJeQWpwZ15BbWU4MDQ5NTgwOTkx._V1_SY1000_CR0,0,674,1000_AL_.jpg" width="250" height="376" />
                    <title>Westworld</title>
                </lockup>
                <lockup onselect="playMedia('', 'video')">
                    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjI3ODU0OTQ1MV5BMl5BanBnXkFtZTgwNzI0MTQ2MzE@._V1_.jpg" width="250" height="376" />
                    <title>Heores</title>
                </lockup>
                <lockup onselect="playMedia('', 'video')">
                    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BODI0NjU5NTM0M15BMl5BanBnXkFtZTgwMTc4Mzc4MjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg" width="250" height="376" />
                    <title>Stranger Things</title>
                </lockup>
                <lockup onselect="playMedia('', 'video')">
                    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDRmOTZlOTEtNDdkMS00Yjg4LWJlYjgtZjA2NzkwZjMyNTk2XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg" width="250" height="376" />
                    <title>Black Mirror</title>
                </lockup>
                <lockup onselect="playMedia('', 'video')">
                    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MjA3MzUwOF5BMl5BanBnXkFtZTgwNDU1MjMxNjE@._V1_.jpg" width="250" height="376" />
                    <title>Zoo</title>
                </lockup>
                <lockup onselect="playMedia('', 'video')">
                    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5NDk1NzU0MF5BMl5BanBnXkFtZTcwMDQ1ODA1OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg" width="250" height="376" />
                    <title>Fringe</title>
                </lockup>
            </section>
        </grid>
    </relatedContent>
    </listItemLockup>
    </section>
    </list>
    </catalogTemplate>
    </document>`
    
    var parser = new DOMParser();
    
    var alertDoc = parser.parseFromString(alertString, "application/xml");
    
    return alertDoc
}
