export const FIRST_DAY_JOB_DATE = "2020-12-01";

export const getYearsOfExperience = () => {
  const today = new Date();
  const firstDayJob = new Date(FIRST_DAY_JOB_DATE);
  const yearsOfExperience = today.getFullYear() - firstDayJob.getFullYear();
  return yearsOfExperience;
};