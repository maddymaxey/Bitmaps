/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "icons": {
        "strokepath": [
            {
                "path": "M 169.92 338.15 L 203.43 338.15",
                "duration": 600
            },
            {
                "path": "M 169.92 323.82 L 203.43 323.82",
                "duration": 600
            },
            {
                "path": "M 179.4 352.27 L 193.95 352.27",
                "duration": 600
            },
            {
                "path": "M 180.14,319.39 L 180.14,295.15      193.21,295.15 193.21,319.391    ",
                "duration": 600
            },
            {
                "path": "M179.06,316.62     c-14.84-3.45-25.89-16.75-25.89-32.64c0-18.51,15-33.51,33.51-33.51c18.51,0,33.51,15,33.51,33.51     c0,15.8-10.93,29.04-25.64,32.581",
                "duration": 600
            },
            {
                "path": "M 338.17,253.2 L 354.81,269.86      281.79,342.891 260.19,348.05 265.24,326.13 338.17,253.21    ",
                "duration": 600
            },
            {
                "path": "M 318.14 274.08 L 333.74 289.67",
                "duration": 600
            },
            {
                "path": "M 270.25 320.5 L 287.25 337.75",
                "duration": 600
            },
            {
                "path": "M 424.32,355.0 L 394.81,325.71      479.12,241.41 508.62,270.71 424.32,355.01    ",
                "duration": 600
            },
            {
                "path": "M 426.01 322.76 L 441.25 338",
                "duration": 600
            },
            {
                "path": "M 454.67 294.1 L 470 309.5",
                "duration": 600
            },
            {
                "path": "M 480.28 268.49 L 495.5 283.5",
                "duration": 600
            },
            {
                "path": "M 436.23 303.27 L 455.75 323.5",
                "duration": 600
            },
            {
                "path": "M 462.15 277.34 L 482 297.25",
                "duration": 600
            },
            {
                "path": "M 626.18,255.9 L 641.35,255.95      635.45,290.73 646.83,298.52 636.3,306.109 639.88,339.83 626.39,339.83    ",
                "duration": 600
            },
            {
                "path": "M 569.28,255.9 L 554.1,255.95      560,290.73 548.62,298.52 559.16,306.109 555.58,339.83 569.07,339.83    ",
                "duration": 600
            },
            {
                "path": "M597.1,274.71c4.41,0,7.98,3.57,7.98,7.98     s-3.58,7.98-7.98,7.98c-4.398,0-7.979-3.57-7.979-7.98C589.11,278.28,592.69,274.71,597.1,274.71",
                "duration": 600
            },
            {
                "path": "M597.1,309.01c4.41,0,7.98,3.57,7.98,7.98     s-3.58,7.98-7.98,7.98c-4.398,0-7.979-3.58-7.979-7.98C589.11,312.58,592.69,309.01,597.1,309.01",
                "duration": 600
            },
            {
                "path": "M 603.22 322.09 L 593.72 333.58",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 800,
            "height": 600
        }
    }
}; 
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){ 
 $('#icons').lazylinepainter( 
 {
    "svgData": pathObj,
    "strokeWidth": 8,
    "strokeColor": "#e09b99"
}).lazylinepainter('paint'); 
 });