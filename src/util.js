/**
 * 오늘 날짜(년,월,일,시,분,초) 반환해주는 함수
 */
export const todayString = () => {
  const today = new Date();
  return {
    year: today.getFullYear(),
    month: today.getMonth() - 1,
    day: today.getDate(),
    hour: today.getHours(),
    minute: today.getMinutes(),
    second: today.getSeconds()
  };
};
