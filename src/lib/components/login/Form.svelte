<script>

</script>

<div class="flex" data-main-container>
  <div class="min-h-[100vh] w-full hidden lg:block" style="">
  </div>
  <div class="min-h-[100vh] w-full flex flex-col items-center relative">

    <img src="./logo.png" width="300" alt="logo" class="mx-auto mb-[-80px] block lg:hidden">
    <form 
      action=""
      class="w-full max-w-[400px] mx-auto mt-[15vh] flex 
      flex-col gap-3 text-sm rounded-md pt-[40px] px-[24px] pb-[40px]"
      style="backdrop-filter:blur(1px);user-select:none;">
      
      <h3 
        class="text-3xl lg:text-secondary text-center font-bold mb-3">
        Login</h3>
      <label for="">Username</label>
      <input 
        type="text"
        name="username"
        placeholder="Enter your username or email"
        required
        class="bg-neutral-100 dark:border-none">
      <label for="">Password</label>
      <input 
        type="password"
        name="password"
        placeholder="Enter your password"
        required
        class="bg-neutral-100dark:border-none">

      <label class="mt-3">
        <input type="checkbox">
        Remember Me
      </label>

      <button class="p-3 mt-3 bg-secondary hover:bg-secondary font-bold">Login</button>
    </form>
  </div>
</div>

<style>
  [data-main-container] > div {
    position: relative;
    z-index: 1;
  }

  [data-main-container] > div::before,
  [data-main-container] > div::after {
    position: absolute;
    content: '';
    inset: 0;
    z-index: -1;
  }

  [data-main-container] > div::before {
    background: linear-gradient(to bottom, var(--color-primary), var(--color-secondary));
  }
  
  [data-main-container] > div::after {
    background: url(./logo.png);
    background-repeat: no-repeat;
    background-position: center;
  }

  [data-main-container] > div:nth-child(2)::after {
    display: none;
  }
  @media (min-width: 1024px) {
    [data-main-container] > div:nth-child(2)::before,
    [data-main-container] > div:nth-child(2)::after {
      display: none;
    }
  }
  
</style>

