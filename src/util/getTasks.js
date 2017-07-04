
export default function getTasks(tasks, ymd) {
  const { year, month, date } = ymd;
  if (year in tasks && month in tasks[year] && date in tasks[year][month]) {
    return tasks[year][month][date];
  }
  return { status: null, items: [] };
}
