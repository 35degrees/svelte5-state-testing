<script>
	import { mainPageNumber, componentPageNumber, subPageNumber } from './state.svelte.js';
	import { fade } from 'svelte/transition';
	import { pageIndex } from './store.js';
	import Component from '../component/Component.svelte';
	import Summary from '../component/Summary.svelte';
	import { onDestroy } from 'svelte';

	let pageIndexVal = $state();

	const unsubscribe = pageIndex.subscribe((value) => {
		pageIndexVal = value;
	});

	onDestroy(unsubscribe);
</script>

<section id="main" in:fade={{ duration: 280, delay: 320 }} out:fade={{ duration: 280 }}>
	{#if pageIndexVal === 0}
		<div class="transition-container">
			<div
				in:fade={{ duration: 300, delay: 400 }}
				out:fade={{ duration: 300 }}
				class="container relative flex h-[480px] w-[500px] flex-col justify-start gap-6 text-black"
			>
				<p class="mt-0 text-left text-sm">+page.svelte</p>
				<div class="text-md flex flex-col gap-4 text-left">
					<p>
						I'm working in Svelte 5 and I'm having trouble getting my state.svelte.js file to work
						in a component. I've fallen back on Stores in my last couple of projects. I'm looking
						for feedback to make my state file not re-initialize when it's reloaded.
					</p>
					<p>
						For this test, you'll set a state via a class on this page (the main +page.svelte page),
						then you'll do the same thing on a component. Then you'll come back to +page.svelte and
						then reload the component to see if the state has changed on either page.
					</p>
					<p>
						Click here to increment the <span class="underline">main page number</span> starting at 1
						to any number:
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
					class="absolute -bottom-20 w-1/2 rounded-xl border-none bg-slate-400 px-5 py-2 text-lg text-white"
				>
					Go to component
				</button>
			</div>
		</div>
	{:else if pageIndexVal === 1}
		<Component />
	{:else if pageIndexVal === 2}
		<div class="transition-container">
			<div
				in:fade={{ duration: 300, delay: 300 }}
				out:fade={{ duration: 300 }}
				class="container relative flex h-[480px] w-[500px] flex-col gap-6 text-black"
			>
				<p class="mt-0 text-left text-sm">+page.svelte</p>
				<div class="text-md flex flex-col gap-4 text-left">
					<p>You can see that the state was held onto on the main page:</p>
				</div>
				<button
					class="w-1/5 select-none rounded-xl border-none bg-blue-400 px-5 py-2 text-3xl text-white opacity-70"
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
					class="absolute -bottom-20 w-1/2 rounded-xl border-none bg-slate-400 px-5 py-2 text-lg text-white"
				>
					Go to component
				</button>
			</div>
		</div>
	{:else if pageIndexVal === 3}
		<Component />
	{:else if pageIndexVal === 4}
		<div class="transition-container">
			<div
				in:fade={{ duration: 300, delay: 400 }}
				out:fade={{ duration: 300 }}
				class="container relative flex h-[480px] w-[500px] flex-col justify-start gap-6 text-black"
			>
				<p class="mt-0 text-left text-sm">+page.svelte</p>
				<div class="text-md flex flex-col gap-4 text-left">
					<p>
						We are back on the main +page.svelte to test out if state holds through page layout
						changes.
					</p>
					<p>
						Click here to increment the original <span class="underline">MainPageNumber</span> you set
						at the beginning:
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
						And here's the component state you set earlier just to keep an eye on it through these
						next steps (we won't change it here):
					</p>
					<button
						class="w-1/5 rounded-xl border-none bg-orange-400 px-5 py-2 text-3xl text-white opacity-70"
					>
						{componentPageNumber.componentNumber}
					</button>
					<p>Remember these numbers and click the button below to route to the subpage.</p>
				</div>
				<button
					onclick={() => pageIndex.update((v) => (v = 5))}
					class="absolute -bottom-20 w-1/2 rounded-xl border-none bg-slate-400 px-5 py-2 text-lg text-white"
					><a href="/subpage">Route to the subpage</a>
				</button>
			</div>
		</div>
	{:else if pageIndexVal === 6}
		<div class="transition-container">
			<div
				in:fade={{ duration: 300, delay: 400 }}
				out:fade={{ duration: 300 }}
				class="container relative flex h-[480px] w-[500px] flex-col justify-start gap-6 text-black"
			>
				<p class="mt-0 text-left text-sm">+page.svelte</p>
				<div class="text-md flex flex-col gap-4 text-left">
					<p>
						One more time, back on the main +page.svelte! Here are the results of the three states
						we set:
					</p>
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
					<p>
						How is looking? And one more check as we route again to the subpage, click the button
						below.
					</p>

					<button
						onclick={() => pageIndex.update((v) => (v = 7))}
						class="absolute -bottom-20 w-1/2 rounded-xl border-none bg-slate-400 px-5 py-2 text-lg text-white"
						><a href="/subpage">Route to the subpage</a>
					</button>
				</div>
			</div>
		</div>
	{:else if pageIndexVal === 8}
		<Component />
	{:else if pageIndexVal === 9}
		<Summary />
	{/if}
</section>

<style>
	#main {
		margin-top: 10rem;
	}
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
