const SignInModalContent = () => {
    return (
      <>
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-700 transition">Sign In</button>
        </form>
      </>
    );
  };
  
  export default SignInModalContent;
  