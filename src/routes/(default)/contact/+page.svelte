<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- TODO: update this placeholder UI from TailwindUI  -->
<div class="relative isolate bg-gray-900">
	<div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
		<div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
			<div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
				<div
					class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2"
				>
					<svg
						class="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
								width="200"
								height="200"
								x="100%"
								y="-1"
								patternUnits="userSpaceOnUse"
							>
								<path d="M130 200V.5M.5 .5H200" fill="none" />
							</pattern>
						</defs>
						<svg x="100%" y="-1" class="overflow-visible fill-gray-800/20">
							<path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
						</svg>
						<rect
							width="100%"
							height="100%"
							stroke-width="0"
							fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
						/>
					</svg>
					<div
						class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
						aria-hidden="true"
					>
						<div
							class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
							style="clip-path: polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)"
						></div>
					</div>
				</div>
				<h2 class="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
				<p class="mt-6 text-lg leading-8 text-gray-300">
					Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut
					tincidunt integer elementum id sem. Arcu sed malesuada et magna.
				</p>
				<dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
					<div class="flex gap-x-4">
						<dt class="flex-none">
							<span class="sr-only">Address</span>
							<svg
								class="h-7 w-6 text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
								/>
							</svg>
						</dt>
						<dd>545 Mavis Island<br />Chicago, IL 99191</dd>
					</div>
					<div class="flex gap-x-4">
						<dt class="flex-none">
							<span class="sr-only">Telephone</span>
							<svg
								class="h-7 w-6 text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
								/>
							</svg>
						</dt>
						<dd><a class="hover:text-white" href="tel:+1 (555) 234-5678">+1 (555) 234-5678</a></dd>
					</div>
					<div class="flex gap-x-4">
						<dt class="flex-none">
							<span class="sr-only">Email</span>
							<svg
								class="h-7 w-6 text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
								/>
							</svg>
						</dt>
						<dd>
							<a class="hover:text-white" href="mailto:hello@example.com">hello@example.com</a>
						</dd>
					</div>
				</dl>
			</div>
		</div>
		<form action="#" method="POST" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
			<div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
				<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
					<div>
						<label for="first-name" class="block text-sm font-semibold leading-6 text-white"
							>First name</label
						>
						<div class="mt-2.5">
							<input
								type="text"
								name="first-name"
								id="first-name"
								autocomplete="given-name"
								class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<label for="last-name" class="block text-sm font-semibold leading-6 text-white"
							>Last name</label
						>
						<div class="mt-2.5">
							<input
								type="text"
								name="last-name"
								id="last-name"
								autocomplete="family-name"
								class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div class="sm:col-span-2">
						<label for="email" class="block text-sm font-semibold leading-6 text-white">Email</label
						>
						<div class="mt-2.5">
							<input
								type="email"
								name="email"
								id="email"
								autocomplete="email"
								class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div class="sm:col-span-2">
						<label for="phone-number" class="block text-sm font-semibold leading-6 text-white"
							>Phone number</label
						>
						<div class="mt-2.5">
							<input
								type="tel"
								name="phone-number"
								id="phone-number"
								autocomplete="tel"
								class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div class="sm:col-span-2">
						<label for="message" class="block text-sm font-semibold leading-6 text-white"
							>Message</label
						>
						<div class="mt-2.5">
							<textarea
								name="message"
								id="message"
								rows="4"
								class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
							></textarea>
						</div>
					</div>
				</div>
				<div class="mt-8 flex justify-end">
					<button type="submit" class="btn variant-filled-primary">Send message</button>
				</div>
			</div>
		</form>
	</div>
</div>
