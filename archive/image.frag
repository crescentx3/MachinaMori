precision highp float;

uniform float iTime;
uniform vec2 iResolution;

#define PI 3.14159
#define TWO_PI (PI*2.0)
#define N 6.0

void main() {
  vec2 center = gl_FragCoord.xy;
  center.x = -100.12 * sin(iTime / 200.0);
  center.y = -100.12 * cos(iTime / 20.0);

  vec2 v = (gl_FragCoord.xy - iResolution / 20.0) / min(iResolution.y, iResolution.x) * 5.0;
  v.x = v.x - 10.0;
  v.y = v.y - 200.0;
  float col = 0.0;

  for(float i = 0.0; i < N; i++) {
      float a = i * (TWO_PI / N) * 61.95;
      col += cos(TWO_PI * (v.y * cos(a) + v.x * sin(a) + sin(iTime * 0.004) * 100.0));
  }

  col = (col + 1.0) * 0.5;  // Normalize col to be between 0 and 1

  // Output the grayscale color
  vec4 grayscale = vec4(col, col, col, 1.0);

  // Apply duotone effect: map white to yellow and black to orange
  vec4 duotone;
  duotone.r = mix(1.0, 1.0, grayscale.r);  // Yellow channel (white becomes yellow)
  duotone.g = mix(0.6, 0.5, grayscale.r);  // Green channel (black becomes orange)
  duotone.b = mix(0.1, 0.1, grayscale.r);  // Blue channel stays 0 for both

  // Output the final duotone color
  gl_FragColor = duotone;
}
