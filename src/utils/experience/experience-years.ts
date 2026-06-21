const CAREER_START_YEAR = 2020;
const CAREER_START_MONTH = 11;

export function getYearsOfExperience(currentDate = new Date()) {
  let years = currentDate.getFullYear() - CAREER_START_YEAR;

  if (currentDate.getMonth() < CAREER_START_MONTH) {
    years -= 1;
  }

  return years;
}

export function getYearsOfExperienceLabel(currentDate = new Date()) {
  return `${getYearsOfExperience(currentDate)}+`;
}
