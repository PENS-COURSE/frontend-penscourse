<template>
  <div className="spinner-container">
    <div className="loading-spinner"></div>
  </div>
</template>

<script></script>

<style>
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading-spinner {
  margin: auto;
  width: 25px;
  height: 25px;
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #383636; /* Blue */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
}
</style>
