<script>
	import { pageIndex } from '../routes/store.js';
	import { componentPageNumber, mainPageNumber, subPageNumber } from '../routes/state.svelte.js';
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
	{#if pageIndexVal === 1}
		<div class="transition-container">
			<div
				in:fade={{ duration: 300, delay: 400 }}
				out:fade={{ duration: 300 }}
				class="container relative flex h-[480px] w-[500px] flex-col gap-6 text-black"
			>
				<p class="mt-0 text-left text-sm">Component.svelte</p>
				<div class="text-md flex flex-col gap-4 text-left">
					<p>
						You are now in the component. Click here to decrement a second number with the class <span
							class="underline">ComponentPageNumber</span
						>:
					</p>
				</div>
				<button
					onclick={() => componentPageNumber.decrement()}
					class="w-1/5 rounded-xl border-none bg-orange-400 px-5 py-2 text-3xl text-white"
				>
					{componentPageNumber.componentNumber}
				</button>
				<div class="text-md flex flex-col gap-4 text-left">
					<p>
						Remember this number and you'll return here. Please go to back to the main +page.svelte
						to review the state changes:
					</p>
				</div>
				<button
					onclick={() => pageIndex.update((v) => (v = 2))}
					class="absolute -bottom-20 w-1/2 rounded-xl border-none bg-slate-400 px-5 py-2 text-lg text-white"
				>
					Return to +page.svelte
				</button>
			</div>
		</div>
	{:else if pageIndexVal === 3}
		<div class="transition-container">
			<div
				in:fade={{ duration: 300, delay: 400 }}
				out:fade={{ duration: 300 }}
				class="container relative flex h-[480px] w-[500px] flex-col gap-6 text-black"
			>
				<p class="mt-0 text-left text-sm">Component.svelte</p>
				<p>
					Here's a look at the <span class="underline">ComponentPageNumber</span> after coming back:
				</p>

				<button
					class="w-1/5 rounded-xl border-none bg-orange-400 px-5 py-2 text-3xl text-white opacity-70"
				>
					{componentPageNumber.componentNumber}
				</button>
				<p>
					Nice, we were able to hold the state over a component change! But can we hold state after
					changing the routing of a page?
				</p>
				<p>
					Click below to return to the main +page.svelte to see if we can maintain state over page
					changes?
				</p>
				<button
					onclick={() => pageIndex.update((v) => (v = 4))}
					class="absolute -bottom-20 w-1/2 rounded-xl border-none bg-slate-400 px-5 py-2 text-lg text-white"
				>
					Return to +page.svelte
				</button>
			</div>
		</div>
	{:else if pageIndexVal === 8}
		<div class="transition-container">
			<div
				in:fade={{ duration: 300, delay: 400 }}
				out:fade={{ duration: 300 }}
				class="container relative flex h-[480px] w-[500px] flex-col gap-6 text-black"
			>
				<p class="mt-0 text-left text-sm">Component.svelte</p>
				<div class="text-md flex flex-col gap-4 text-left">
					<p>And finally, we are back at the component:</p>
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
					<p>All good?? Thought so, very exciting. Let's summarize.</p>
				</div>
				<button
					onclick={() => pageIndex.update((v) => (v = 9))}
					class="absolute -bottom-20 w-1/2 rounded-xl border-none bg-slate-400 px-5 py-2 text-lg text-white"
					><a href="/">Summary</a>
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
