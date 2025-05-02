import { useEffect, useState } from "react";
import { fetchSchedule, ClassItem } from "./api/schedule";
import { CourseTile } from "./components/CourseTile";
import { SaveButton } from "./components/SaveButton";
function App() {
  const courseId = 1234;
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const handleEnroll = () => {
    console.log("the user wants to enroll");
  };
  useEffect(() => {
    fetchSchedule(courseId)
      .then((data) => setClasses(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading schedule…</div>;

  return (
    <div className="content-container stack-24">
      <label className="text-title-large text-neutral-0">Course Dates</label>
      <div className="stack-24" role="radiogroup" aria-label="Course Dates">
        {classes.map((cls) => (
          <CourseTile
            key={cls.id}
            item={cls}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        ))}
      </div>

      <button
        className="enroll-button text-heading-small text-neutral-100"
        onClick={handleEnroll}
      >
        Enroll in Course
      </button>
      <SaveButton />
    </div>
  );
}

export default App;
