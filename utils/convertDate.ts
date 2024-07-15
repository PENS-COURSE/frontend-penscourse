export default function convertDate(date: any) {
  const isoDateString = date;
  const newDate: Date = new Date(isoDateString);
  //   const options: Intl.DateTimeFormatOptions = { weekday: "long" };
  const day: string = String(newDate.getDate()).padStart(2, "0");
  const month: string = newDate.toLocaleString("id-ID", { month: "long" });
  const year: string = String(newDate.getFullYear());
  const formattedDate: string = `${day}-${month}-${year}`;

  return formattedDate;
}
