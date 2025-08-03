export default function GrayPrimaryButton({ text }) {
  return (
    <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4">
      {text}
    </button>
  );
}
