function solution(force1, force2, theta) {

  const thetaRad = (theta * Math.PI) / 180;
  const resultantForce = Math.sqrt(
      Math.pow(force1, 2) +
      Math.pow(force2, 2) +
      2 * force1 * force2 * Math.cos(thetaRad)
  );
  const resultantAngle = Math.atan2(
      force2 * Math.sin(thetaRad),
      force1 + force2 * Math.cos(thetaRad)
  );
  const resultantAngleDegrees = (resultantAngle * 180) / Math.PI;
  return [resultantForce, resultantAngleDegrees];

}


console.log(solution(20, 10, 120));