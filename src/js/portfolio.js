 $(function(){
        $("#elastic_grid").elastic_grid({
            'showAllText' : 'All',
            'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
            'hoverDirection': true,
            'hoverDelay': 0,
            'hoverInverse': false,
            'expandingSpeed': 500,
            'expandingHeight': 500,
            'items' :
            [
                {
                    'title'         : 'MediaCAST',
                    'description'   : 'MediaCAST is a Live Streaming and Video on Demand application tailored for school districts and colleges. The application interfaces with a propriety hardware and software in order to make uploading and sharing a variety of digital and analog media in the classroom fun and easy.<br> Confidentialty prevents me from sharing the code or from discussing some of the tech that drives this full-stack application.',
                    'thumbnail'     : ['images/small/mediacast02.png','images/small/mediacast03.png','images/small/mediacast04.png','images/small/mediacast05.png','images/small/mediacast06.png','images/small/mediacast07.png'],
                    'large'         : ['images/large/mediacast02.png','images/large/mediacast03.png','images/large/mediacast04.png','images/large/mediacast05.png','images/large/mediacast06.png','images/large/mediacast07.png'],
                    'button_list'   :
                    [
                       // { 'title':'Playable Demo', 'url' : 'https://dl.dropboxusercontent.com/u/215389670/games/DynamicAudioSample/index.html', 'new_window' : true },
                        { 'title':'View Company Website', 'url':'http://www.inventivetec.com/', 'new_window' : true}
                    ],
                    'tags'          : ['Full-Stack App']
                },
		        {
                    'title'         : '< Rant >',
                    'description'   : "Don\'t vent your frustrations on social media. Try screaming into the void instead. < Rant > is a simple app that will let you post what\'s bugging you without sharing or remembering any of your choice words.",
                    'thumbnail'     : ['images/small/rant01.png','images/small/rant02.png'],
                    'large'         : ['images/large/rant01.png','images/large/rant02.png'],
                    'button_list'   :
                    [
			            { 'title':'View Project on GitHub', 'url':'https://github.com/patrickhimes/rant', 'new_window' : true}
                    ],
                    'tags'          : ['Angular']
                },
		        {
                    'title'         : 'VR Audio Visualizer',
                    'description'   : 'Imagine a landscape that changes in response to the background music. Here I animate an array of game objects to create an audio visualizer that surrounds can respond to either music or a microphone.',
                    'thumbnail'     : ['images/small/av01.png','images/small/av02.png','images/small/av01.png'],
                    'large'         : ['images/large/av01.png', 'images/large/av02.png','https://www.youtube.com/watch?v=s4sl9V8zh5c'],
                    'button_list'   :
                    [
                        //{ 'title':'Playable Demo', 'url' : 'https://dl.dropboxusercontent.com/u/215389670/games/DynamicAudioSample/index.html', 'new_window' : true },
			        { 'title':'Watch Demo on YouTube', 'url' : 'https://www.youtube.com/watch?v=s4sl9V8zh5c', 'new_window' : true },
                        { 'title':'View Project on GitHub', 'url':'https://github.com/patrickhimes/unity-audio-visualizer', 'new_window' : true}
                    ],
                    'tags'          : ['Unity3D']
                },
                {
                    'title'         : 'PipBuck UI',
                    'description'   : 'Using Unity\'s new UI system, I created a Pipboy parody (PipBuck) who\'s stats and inventory are driven by Scriptable Objects. The UI is rendered in world space and takes advantage to the Pipboy model\'s texture to create a CRT effect.',
                    'thumbnail'     : ['images/small/pipbuckUI.png'],
                    'large'         : ['images/large/pipbuckUI.png'],
                    'button_list'   :
                    [
                       // { 'title':'Playable Demo', 'url' : 'https://dl.dropboxusercontent.com/u/215389670/games/DynamicAudioSample/index.html', 'new_window' : true },
                        { 'title':'View Project on GitHub', 'url':'https://github.com/patrickhimes/PipBuck', 'new_window' : true}
                    ],
                    'tags'          : ['Unity3D']
                }

            ]
        });
    });