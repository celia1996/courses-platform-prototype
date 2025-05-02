export function formatDatesDetailed(
  dates: [number, number][],
  tz: string
): string {
  const dateFmt = (ts: number, opts: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("en-US", { timeZone: tz, ...opts }).format(
      new Date(ts * 1000)
    );

  return dates
    .map(([start, end]) => {
      const startDay = dateFmt(start, { weekday: "long" });
      const endDay = dateFmt(end, { weekday: "long" });
      const startMD = dateFmt(start, { month: "long", day: "numeric" });
      const endMD = dateFmt(end, { month: "long", day: "numeric" });

      // Same day
      if (startDay === endDay && startMD === endMD) {
        return `${startDay}, ${startMD}`;
      }
      if (startDay !== endDay && startMD.split(" ")[0] === endMD.split(" ")[0]) {
        const [, startDayOfMonth] = startMD.split(" ");
        const [, endDayOfMonth] = endMD.split(" ");
        return `${startDay} & ${endDay}, ${startDayOfMonth} & ${endDayOfMonth}`;
      }
      return `${startDay}, ${startMD} & ${endDay}, ${endMD}`;
    })
    .join(" / ");
}
export function formatPriceDetailed(
  amount: number,
  currency: string,
  validUntil: number
): string {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(amount);

  const validDate = new Date(validUntil * 1000);
  const validStr = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
  }).format(validDate);

  return `${price} Until ${validStr}`;
}
export function formatTimes(
  dates: [number, number][],
  tz: string
): string {
  const fmt = (ts: number) =>
    new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hour: "numeric",
      minute: "numeric",
    }).format(new Date(ts * 1000));

  const [start, end] = dates[0];
  return `${fmt(start)} - ${fmt(end)}`;
}