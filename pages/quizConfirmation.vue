<template>
	<!-- component -->
	<div class="min-h-full mt-20 bg-purple-400 flex justify-center items-center">
		<div class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
		</div>
		<div class="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
		</div>
		<div class="static py-12 px-12  bg-white rounded-2xl shadow-xl z-20">
			<div>
				<h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Petunjuk Kuis</h1>
				<p class="w-80 text-left text-sm mt-8 mb-2 font-semibold text-gray-700 tracking-wide cursor-pointer">Aturan Ujian: </p>
		  <p class="mt-2 text-sm">Kuis ini bertujuan untuk menguji pengetahuan Anda tentang materi yang telah dipelajari di kelas ini.</p>
		  <p class="mt-4 text-sm">Terdapat 5 Pertanyaan yang harus dikerjakan dalam ujian ini. Beberapa ketentuannya sebagai berikut:</p>
		  <p class="mt-2 ml-4 text-sm"> 1. Syarat nilai kelulusan: 80%</p>
		  <p class="mt-2 ml-4 text-sm"> 2. Durasi ujian: 20 menit</p>
			</div>
				<div class="text-center mt-6">
					<button class="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">Create Account</button>
			<NuxtLink to="/quiz">
			  <button @click="showModal = true"
				class="hover:shadow-form w-full rounded-md bg-[#FBB50E] py-3 px-8 text-center text-base font-semibold text-white outline-none"
			  >
				Mulai Kuis
			  </button>
			</NuxtLink>
			
				</div>
			</div>
			<div class="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
			<div
				class="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
			</div>
		</div>
	
	
	
	</template>
	
	<script>
	</script>
	
	<style></style>
	