<template>
  <main
    class="h-screen overflow-x-hidden relative text-gray-600 place-items-center"
  >
    <div class="mx-auto mt-[150px] bg-white w-[95%] md:w-[400px] shadow-lg">
      <div class="p-4">
        <h4 class="text-3xl text-indigo-500">Welcome back!</h4>
        <p>Nice to see you again</p>
        <form class="mt-8 flex flex-col gap-6">
          <label>
            Email<span class="text-red-400">*</span>
            <input
              class="block w-full py-1.5 px-2 border border-gray-400"
              type="text"
            />
          </label>
          <label>
            Password
            <input
              class="block w-full py-1.5 px-2 border border-gray-400"
              type="password"
            />
          </label>
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <button
            class="w-full bg-indigo-500 text-white py-1.5 px-2 hover:opacity-75"
            type="button"
          >
            Submit
          </button>
        </form>
        <div class="mt-8">
          <p class="text-center">Or</p>
          <div class="flex text-white gap-3 w-full justify-center mt-6">
            <button class="h-10 w-10 bg-blue-400" type="button">
              <i class="bx bxl-facebook text-3xl"></i>
            </button>
            <button class="h-10 w-10 bg-sky-400" type="button">
              <i class="bx bxl-twitter text-3xl"></i>
            </button>
            <button class="h-10 w-10 bg-red-400" type="button">
              <i class="bx bxl-google text-3xl"></i>
            </button>
          </div>
          <div class="flex justify-center mt-12 text-sm">
            Already have account?
            <a class="cursor-pointer hover:text-indigo-500"
              >&nbsp;Register Here</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-2 w-full">
      <p class="text-center text-gray-400">Poncoollpedia@allright reserved</p>
    </div>
  </main>
</template>
<script lang="js">
export default {}
</script>
