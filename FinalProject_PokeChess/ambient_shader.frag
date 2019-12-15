#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform vec2 position;
uniform float thresh;

void main( void ) {
    float dist = abs(position.x -gl_FragCoord.x) * abs(position.x - gl_FragCoord.x) + 
        abs(position.y - gl_FragCoord.y) * abs(position.y - gl_FragCoord.y);

	gl_FragColor = vec4( 0, 0, 0, dist / thresh);
}