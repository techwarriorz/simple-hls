# Simple-HLS

Simple-HLS is a simple FFMPEG Wrapper that will allow you to easily transcode Multi-bitrate HLS videos.

# Installation

## Installing FFMPEG

First, you will need to make sure that `FFMPEG` is installed on your machine, you can do these by utilizing Home Brew:

`brew install FFMPEG`

If you are utilizing Linux, here is a great article on how to install https://linuxize.com/post/how-to-install-ffmpeg-on-ubuntu-18-04/

If you are using Windows, here is another great article on how to install https://www.wikihow.com/Install-FFmpeg-on-Windows


## Installing Simple-HLS

To install Simple-HLS for local development, you simply (pun intended) need to run `npm install simple-hls`.


## Using Simple-HLS

```
import {Transcoder} from 'simple-hls'

async function transcodeSomething () {
    //Create a new instance of the transcoder
    //First Parameter is the path to the video that you want to transcode
    //Second Parameter is the path to the folder/directory you would like the HLS Files Saved
    //Third Parameter is an optional options object

    const t = new Transcoder(`${__dirname}/test.mp4`, `${__dirname}/path_to_output_directory`, {showLogs: false});
    try {
        const hlsPath = await t.transcode();
        console.log('Successfully Transcoded Video');
    } catch(e){
        console.log('Something went wrong');
    }
    
}
```

# Renditions

Out of the box the outputted renditions are 1080p, 720p, 480p, 360p. However, we do allow for you to supply an array of custom renditions into the options object (if you need more or less). Below is an example on how to supply custom renditions:

```
    //All fields in each object are REQUIRED... There is no minimum or maximum amount of renditions that you can have.

    const customRenditions = [
         {
        width: 640,
        height: 360,
        profile: 'main',
        hlsTime: '4',
        bv: '800k',
        maxrate: '856k',
        bufsize: '1200k',
        ba: '96k',
        ts_title: '360p',
        master_title: '360p'
    },
    {
        width: 842,
        height: 480,
        profile: 'main',
        hlsTime: '4',
        bv: '1400k',
        maxrate: '1498',
        bufsize: '2100k',
        ba: '128k',
        ts_title: '480p',
        master_title: '480p'
    },
    {
        width: 1280,
        height: 720,
        profile: 'main',
        hlsTime: '4',
        bv: '2800k',
        maxrate: '2996k',
        bufsize: '4200k',
        ba: '128k',
        ts_title: '720p',
        master_title: '720p' 
    },
    {
        width: 1920,
        height: 1080,
        profile: 'main',
        hlsTime: '4',
        bv: '5000k',
        maxrate: '5350k',
        bufsize: '7500k',
        ba: '192k',
        ts_title: '1080p',
        master_title: '1080p'
    }
];
    ]

    const t = new Transcoder(inputPath, outputPath, {renditions: customRenditions});
    try {
        const hlsPath = await t.transcode();
        console.log('Successfully Transcoded Video');
    } catch(e){
        console.log('Something went wrong');
    }

```

# Reporting Bugs

If you have an issues and/or feature requests, please post an issue in the github page.
