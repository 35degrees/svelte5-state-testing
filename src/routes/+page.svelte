<script>
	import { mainPageNumber } from './state.svelte.js';
	import { fade } from 'svelte/transition';
	import { pageIndex } from './store.js';
	import Component from '../component/Component.svelte';
	import Summary from '../component/Summary.svelte';
	import { onDestroy } from 'svelte';

	let pageIndexVal = $state();

	const unsubscribe = pageIndex.subscribe((value) => {
		pageIndexVal = value;
	});

	console.log(pageIndexVal);

	onDestroy(unsubscribe);
</script>

<section in:fade={{ duration: 280, delay: 320 }} out:fade={{ duration: 280 }}>
	{#if pageIndexVal === 0}
		<div class="transition-container">
			{#key pageIndexVal}
				<div
					in:fade={{ duration: 300, delay: 400 }}
					out:fade={{ duration: 300 }}
					class="container flex h-auto w-[500px] flex-col justify-start gap-6 text-black"
				>
					<p class="mt-0 text-left text-sm">+page.svelte</p>
					<div class="text-md flex flex-col gap-4 text-left">
						<p>
							I'm working in Svelte 5 and I'm having trouble getting my state.svelte.js file to work
							in a component. I've fallen back on Stores in my last couple of projects. I'm looking
							for feedback to make my state file not re-initialize when it's reloaded.
						</p>
						<p>
							For this test, you'll set a state via a class on this page (the main +page.svelte
							page), then you'll do the same thing on a component. Then you'll come back to
							+page.svelte and then reload the component to see if the state has changed on either
							page.
						</p>
						<p>
							Click here to increment the <span class="underline">main page number</span> starting at
							1 to any number:
						</p>
					</div>
					<button
						onclick={() => mainPageNumber.increment()}
						class="w-1/5 select-none rounded-xl border-none bg-blue-400 px-5 py-2 text-3xl text-white"
					>
						{mainPageNumber.mainNumber}
					</button>
					<div class="text-md flex flex-col gap-4 text-left">
						<p>
							Remember this number and you'll return here. Please go to the component here to change
							another number:
						</p>
					</div>
					<button
						onclick={() => pageIndex.update((v) => (v = 1))}
						class="absolute bottom-24 w-1/2 rounded-xl border-none bg-slate-400 px-5 py-2 text-lg text-white"
					>
						Go to component
					</button>
				</div>
			{/key}
		</div>
	{:else if pageIndexVal === 1}
		{#key pageIndexVal}
			<Component />
		{/key}
	{:else if pageIndexVal === 2}
		<div class="transition-container">
			{#key pageIndexVal}
				<div
					in:fade={{ duration: 300, delay: 300 }}
					out:fade={{ duration: 300 }}
					class="container flex h-auto w-[500px] flex-col gap-6 text-black"
				>
					<p class="mt-0 text-left text-sm">+page.svelte</p>
					<div class="text-md flex flex-col gap-4 text-left">
						<p>You can see that the state was held onto on the main page:</p>
					</div>
					<button
						class="w-1/5 select-none rounded-xl border-none bg-blue-400 px-5 py-2 text-3xl text-white"
					>
						{mainPageNumber.mainNumber}
					</button>
					<div class="text-md flex flex-col gap-4 text-left">
						<p>
							Remember this number and you'll return here. Please go to the component here to change
							another number:
						</p>
					</div>
					<button
						onclick={() => pageIndex.update((v) => (v = 3))}
						class="absolute bottom-24 w-1/2 rounded-xl border-none bg-slate-400 px-5 py-2 text-lg text-white"
					>
						Go to component
					</button>
				</div>
			{/key}
		</div>
	{:else if pageIndexVal === 3}
		{#key pageIndexVal}
			<Component />
		{/key}
	{:else if pageIndexVal === 4}
		{#key pageIndexVal}
			<Summary />
		{/key}
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
</style>
