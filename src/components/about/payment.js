export default function Payment() {
  return (
    <div class="w-full h-96 overflow-hidden relative">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        alt=""
      />
      <div class="absolute inset-0 bg-grey-primary bg-opacity-30"></div>
      <div class="flex h-full items-center justify-center relative">
        <h1 class="text-3xl text-teal-100 tracking-wider">How do you pay?</h1>
      </div>
    </div>
  );
}
