uniform sampler2D currentTexture;
uniform float scalar;

void main() {
    vec2 coord = gl_TexCoord[0].xy;
    vec4 pixel_color = texture2D(currentTexture, coord);
    gl_FragColor = pixel_color * vec4(scalar, scalar, scalar, 1);
}
