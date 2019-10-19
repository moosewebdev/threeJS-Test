//create scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//add light

var hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
hemiLight.position.set( 0, 300, 0 );
scene.add( hemiLight );
var dirLight = new THREE.DirectionalLight( 0xffffff );
dirLight.position.set( 75, 300, -75 );
scene.add( dirLight );



camera.position.z = 1000;
//create renderer and append to html
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var loader = new THREE.GLTFLoader();

loader.load('models/tokyo/scene.gltf', function (gltf) {

	scene.add(gltf.scene);
	var mesh;

// Create an AnimationMixer, and get the list of AnimationClip instances
var mixer = new THREE.AnimationMixer( mesh );
var clips = mesh.animations;
}, undefined, function (error) {

	console.error(error);

});



render();
        function render() {

            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }