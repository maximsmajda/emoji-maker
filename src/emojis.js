export const emojis = {
    head: 
    [
        {id: 0, name: 'none', shapeType: 'none'},
        {id: 1, name: 'ellipse', shapeType: 'ellipse', att: [{ry: "40", rx:"40", cy:"50%", cx:"50%", fill:"#ffd70f", stroke:"#000", strokeWidth:"5"}]},
        {id: 2, name: 'rect', shapeType: 'rect', att: [{strokeWidth: "5", rx: "10", height: "70", width: "70", y: "15", x: "15", stroke: "#000", fill: "#ffd70f"}]}
    ],

    eyes: 
    [
        {id: 0, name: 'none', shapeType: 'none'},
        {id: 1, name: 'ellipse', shapeType: 'ellipse', att: [{ry: "6", rx:"6", cy:"40%", cx:"37%", fill:"#ffffff", stroke:"#000", strokeWidth:"2"}, {cx: "37", cy: "40", rx: "2.331", ry: "2.331"}, {ry: "6", rx:"6", cy:"40%", cx:"63%", fill:"#ffffff", stroke:"#000", strokeWidth:"2"}, {cx: "63", cy: "40", rx: "2.331", ry: "2.331"}]},
        {id: 2, name: 'ellipse', shapeType: 'ellipse', att: [{ry: "6", rx:"6", cy:"40%", cx:"37%", fill:"#000", stroke:"#000", strokeWidth:"2"}, {ry: "6", rx:"6", cy:"40%", cx:"63%", fill:"#000", stroke:"#000", strokeWidth:"2"}]},
        {id: 3, name: 'idk', shapeType: "path", att: [{fill: "none", stroke: "#000000", strokeWidth: "2", strokeMiterlimit: "10", d: "M45.024,38.482c0,0-3.361,3.036-8.024,3.036 s-8.024-3.036-8.024-3.036"}, {fill: "none", stroke: "#000000", strokeWidth: "2", strokeMiterlimit: 10, d: "M71.024,38.482c0,0-3.361,3.036-8.024,3.036 s-8.024-3.036-8.024-3.036"}]},  
        {id: 4, name: 'idk', shapeType: "path", att: [{fill: "none", stroke: "#000000", strokeWidth: "2", strokeMiterlimit: "10", d: "M45.024,41.518c0,0-3.361-3.036-8.024-3.036 s-8.024,3.036-8.024,3.036"}, {fill: "none", stroke: "#000000", strokeWidth: "2", strokeMiterlimit: "10", d: "M71.024,41.518c0,0-3.361-3.036-8.024-3.036 s-8.024,3.036-8.024,3.036"}]}  
    ],

    mouth: 
    [
        {id: 0, name: 'none', shapeType: 'none'},
        {id: 1, name: 'wow', shapeType: 'ellipse', att: [{stroke: "#000", strokeWidth: "0", ry: "5.66665", rx: "13.66664", cy: "68%", cx: "50%", fill: "#000000"}]},
        {id: 2, name: 'neutral', shapeType: 'path', att: [{d: "M68.484,67.831H31.516c-1.255,0-2.272-1.017-2.272-2.272v0c0-1.255,1.017-2.272,2.272-2.272h36.968 c1.255,0,2.272,1.017,2.272,2.272v0C70.756,66.814,69.739,67.831,68.484,67.831z"}]},
        {id: 3, name: 'smile', shapeType: 'path', att: [{d: "M29.244,60.287C30.574,69.21,39.349,76.108,50,76.108s19.426-6.899,20.756-15.821 C70.756,60.287,29.244,60.287,29.244,60.287z"}]},
        {id: 4, name: 'smile_2', shapeType: 'path', att: [{fill: "#FFFFFF", stroke: "#000000", strokeWidth: 3, strokeMiterlimit: "10", d: "M31.412,61.867 c1.191,7.14,9.05,12.66,18.588,12.66s17.397-5.521,18.588-12.66C68.588,61.867,31.412,61.867,31.412,61.867z"}, {stroke: "#000000", strokeWidth: "3", strokeMiterlimit: "10", d: "M92.518,92.952"}]},
        {id: 5, name: 'smilee', shapeType: 'path', att: [{d: 'M66.986,62.151C65.598,68.386,58.429,73.027,50,73.027c-8.429,0-15.598-4.642-16.986-10.876h-3.073 C31.285,70.064,39.899,76.027,50,76.027s18.716-5.963,20.059-13.876H66.986z'}]}
        

    ],
    ears:
    [
        {id: 0, name: 'none', shapeType: 'none'},
    ],
    eyebrows:
    [
        {id: 0, name: 'none', shapeType: 'none'},
        {id: 1, name: '', shapeType: 'path', att: [{d: "M29.289,32.327c3.292-1.018,6.584-2.036,9.875-3.054c0.472-0.146,0.945-0.292,1.417-0.438 c1.226-0.379,0.703-2.31-0.532-1.929c-3.292,1.018-6.584,2.036-9.875,3.054c-0.472,0.146-0.945,0.292-1.417,0.438 C27.531,30.778,28.054,32.709,29.289,32.327L29.289,32.327z"}, {d: "M71.243,30.399c-3.292-1.018-6.584-2.036-9.875-3.054c-0.472-0.146-0.945-0.292-1.417-0.438 c-1.232-0.381-1.759,1.549-0.532,1.929c3.292,1.018,6.584,2.036,9.875,3.054c0.472,0.146,0.945,0.292,1.417,0.438 C71.944,32.709,72.471,30.779,71.243,30.399L71.243,30.399z"}]}
    ],
    other:
    [
        {id: 0, name: 'none', shapeType: 'none'},
        {id: 1, name: 'lol', shapeType: 'path', att: [{fill: "#7FCAFF", stroke: '#000000', strokeWidth: '2', strokeMiterlimit: '10', d: "M81.593,63.375 c3.362-1.734,3.873-5.849,2.222-9.051C82.163,51.122,72.371,45.5,72.371,45.5s-1.093,11.239,0.559,14.44 S78.232,65.109,81.593,63.375z"}, {fill: "#7FCAFF", stroke: '#000000', strokeWidth: '2', strokeMiterlimit: '10', d: "M18.423,63.375 c-3.362-1.734-3.873-5.849-2.222-9.051c1.652-3.202,11.444-8.824,11.444-8.824s1.093,11.239-0.559,14.44 C25.435,63.142,21.785,65.109,18.423,63.375z"}]}    
    ]

};