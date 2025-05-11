<template>
  <p class="center dare-block">{{ $t('homePage.dare') }}</p>
  <p class="center take-up-space-block">{{ $t('homePage.takeUpSpace') }}</p>
  <div class="card">
    <a
      class="center"
      target="_blank"
    >
      <img
        class="flag"
        src="../assets/flag.png"
        alt="Fat Flag"
      />
    </a>
  </div>
</template>

<style scoped>
.flag {
  width: 50%;
  height: auto;
}

.dare-block {
  color: white;
  font-size: 40px;
  font-weight: 300;
  transform: skewX(-10deg);
}

.take-up-space-block {
  color: white;
  font-size: 150px;
  font-weight: 300;
  transform: skewX(-10deg);
  text-shadow: 5px 5px 5px #0550cf;
}
</style>
