function Secondary({ label }: { label: string }) {
  return (
    <button
      className="flex items-center justify-center bg-[#6074cb] text-white text-[1.2rem] font-bold rounded-lg w-full px-5 py-2.5 font-bold shadow-md hover:shadow-lg rounded-[4px] text-[0.9rem] xl:text-[1.2rem] px-[22px] py-[12px] focus:ring-4 focus:outline-none focus:ring-[#F2B434]/50 dark:focus:ring-[#F2B434]/55"
      style={{
        backgroundImage:
          "linear-gradient(45deg, rgb(63, 81, 181), rgb(96, 116, 203), rgb(63, 81, 181))",
      }}
    >
      {label}
    </button>
  );
}

export default Secondary;
