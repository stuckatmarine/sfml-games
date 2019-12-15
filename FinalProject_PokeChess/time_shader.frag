uniform sampler2D currentTexture;
uniform float scalar;
uniform float time;

void main() {
    vec2 coord = gl_TexCoord[0].xy;
    vec4 pixel_color = texture2D(currentTexture, coord);

    if (pixel_color.a > 0.3)
        gl_FragColor = vec4(pixel_color.xyz + sin(time)/2 + 0.5, 1);
    else
        gl_FragColor = pixel_color;
}
