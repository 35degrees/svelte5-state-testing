<script>
	import { pageIndex } from '../store.js';
	import { componentPageNumber, subPageNumber, mainPageNumber } from '../state.svelte.js';
	import { fade } from 'svelte/transition';
	import { onDestroy } from 'svelte';
	let pageIndexVal = $state();

	const unsubscribe = pageIndex.subscribe((value) => {
		pageIndexVal = value;
	});

	console.log(pageIndexVal);

	onDestroy(unsubscribe);
</script>

<section id="main" in:fade={{ duration: 280, delay: 320 }} out:fade={{ duration: 280 }}>
	{#if pageIndexVal === 5}
		<div class="transition-container">
			<div
				in:fade={{ duration: 300, delay: 400 }}
				out:fade={{ duration: 300 }}
				class="container relative flex h-[480px] w-[500px] flex-col gap-6 text-black"
			>
				<p class="mt-0 text-left text-sm">/subpage/+page.svelte</p>
				<div class="text-md flex flex-col gap-4 text-left">
					<p>
						Welcome to the subpage! We navigated away from the main page and didn't link to the
						component here so we can start with fresh state.
					</p>
					<p>Here's the button to increment the new SubPageNumber from 50 up to 75:</p>
				</div>
				<button
					onclick={() => subPageNumber.increment()}
					class="w-1/5 rounded-xl border-none bg-green-400 px-5 py-2 text-3xl text-white"
				>
					{subPageNumber.subNumber}
				</button>
				<div class="text-md flex flex-col gap-4 text-left">
					<p>
						Remember this number and you'll return here. Just for fun, here's the current state of
						the <strong>mainPageNumber </strong> and the <strong> componentPageNumber</strong>:
					</p>
				</div>
				<div class="flex flex-row items-center justify-start gap-6">
					<button
						class="w-1/5 rounded-xl border-none bg-blue-400 px-5 py-2 text-3xl text-white opacity-70"
					>
						{mainPageNumber.mainNumber}
					</button>
					<button
						class="w-1/5 rounded-xl border-none bg-orange-400 px-5 py-2 text-3xl text-white opacity-70"
					>
						{componentPageNumber.componentNumber}
					</button>
				</div>
				<button
					onclick={() => pageIndex.update((v) => (v = 6))}
					class="absolute -bottom-20 w-1/2 rounded-xl border-none bg-slate-400 px-5 py-2 text-lg text-white"
					><a href="/">Return to +page.svelte</a>
				</button>
			</div>
		</div>
	{:else if pageIndexVal === 7}
		<div class="transition-container">
			<div
				in:fade={{ duration: 300, delay: 400 }}
				out:fade={{ duration: 300 }}
				class="container relative flex h-[480px] w-[500px] flex-col gap-6 text-black"
			>
				<p class="mt-0 text-left text-sm">/subpage/+page.svelte</p>
				<div class="text-md flex flex-col gap-4 text-left">
					<p>Another check from the subpage:</p>
				</div>
				<div class="flex flex-row items-center justify-start gap-6 opacity-70">
					<button class="w-1/5 rounded-xl border-none bg-blue-400 px-5 py-2 text-3xl text-white">
						{mainPageNumber.mainNumber}
					</button>
					<button
						class="w-1/5 rounded-xl border-none bg-orange-400 px-5 py-2 text-3xl text-white opacity-70"
					>
						{componentPageNumber.componentNumber}
					</button>
					<button
						class="w-1/5 rounded-xl border-none bg-green-400 px-5 py-2 text-3xl text-white opacity-70"
					>
						{subPageNumber.subNumber}
					</button>
				</div>
				<div class="text-md flex flex-col gap-4 text-left">
					<p>And let's check these three states from the component once more:</p>
				</div>
				<button
					onclick={() => pageIndex.update((v) => (v = 8))}
					class="absolute -bottom-20 w-1/2 rounded-xl border-none bg-slate-400 px-5 py-2 text-lg text-white"
					><a href="/"> View from the component</a>
				</button>
			</div>
		</div>
	{/if}
</section>

<style>
	.transition-container {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
	}

	.transition-container > * {
		grid-row: 1;
		grid-column: 1;
	}
	#main {
		margin-top: 10rem;
	}
</style>
