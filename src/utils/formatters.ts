export function formatDatesDetailed(
  dates: [number, number][],
  tz: string
): string {
  const dayFmt = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: tz,
  });
  const monthFmt = new Intl.DateTimeFormat("en-US", {
    month: "long",
    timeZone: tz,
  });
  const numFmt = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    timeZone: tz,
  });

  const toParts = (ts: number) => {
    const d = new Date(ts * 1000);
    return {
      dayName: dayFmt.format(d),
      monthName: monthFmt.format(d),
      dayNum: numFmt.format(d),
    };
  };

  if (dates.length === 1) {
    const { dayName, monthName, dayNum } = toParts(dates[0][0]);
    return `${dayName}, ${monthName} ${dayNum}`;
  }

  const [{ 0: startTs }, { 0: endTs }] = dates;
  const start = toParts(startTs);
  const end = toParts(endTs);

  if (start.monthName === end.monthName) {
    return `${start.dayName} & ${end.dayName}, ${start.monthName} ${start.dayNum} & ${end.dayNum}`;
  }
  return `${start.dayName}, ${start.monthName} ${start.dayNum} & ${end.dayName}, ${end.monthName} ${end.dayNum}`;
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
export function formatTimes(dates: [number, number][], tz: string): string {
  const fmt = (ts: number) =>
    new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hour: "numeric",
      minute: "numeric",
    }).format(new Date(ts * 1000));

  const [start, end] = dates[0];
  return `${fmt(start)} - ${fmt(end)}`;
}
