export interface Instructor {
    first_name: string;
    last_name: string;
    portrait_image: string;
  }
  
  export interface ClassItem {
    id: number;
    dates: [number, number][];
    instructors: Instructor[];
    location: { timezone: string };
    pricing: { amount: number; currency: string; valid_until: number };
  }
  
  export async function fetchSchedule(courseId: number): Promise<ClassItem[]> {
    // Here we would add the real fetch
    // const res = await fetch(`/api/courses/${courseId}/schedule`);
    // return await res.json();
  
    // I am returning mocked data for the moment
    const exampleData: ClassItem[] = [
      {
        id: 4776,
        dates: [
          [1711378800, 1711391400],
          [1711465200, 1711477800],
        ],
        instructors: [
          {
            first_name: "Tim",
            last_name: "Neusesser",
            portrait_image:
              "https://media.nngroup.com/media/people/photos/Tim-portrait-2022.jpg.200x200_q75_autocrop_crop-smart_upscale.jpg",
          },
        ],
        location: { timezone: "America/New_York" },
        pricing: { amount: 1044, currency: "USD", valid_until: 1709182800 },
      },
      {
        id: 4837,
        dates: [[1713538800, 1713564000]],
        instructors: [
          {
            first_name: "Maddie",
            last_name: "Brown",
            portrait_image:
              "https://media.nngroup.com/media/people/photos/_DSC4827-Edit-Edit.jpg.200x200_q75_autocrop_crop-smart_upscale.jpg",
          },
        ],
        location: { timezone: "America/New_York" },
        pricing: { amount: 1049, currency: "USD", valid_until: 1710907200 },
      },
    ];
  
    return new Promise((resolve) => setTimeout(() => resolve(exampleData), 300));
  }
  