```javascript
<div class="flex">
  <div class="bg-red-500 w-10 h-10 flex-shrink-0"></div>
  <div class="bg-blue-500 w-10 h-10 flex-shrink-0"></div>
</div>
```

**Alternative Solution (Using `flex-grow`):**

While `flex-shrink-0` is recommended here, you could also use `flex-grow` if you want items to take up available space proportionally, even if it means expanding beyond their inherent width:

```javascript
<div class="flex">
  <div class="bg-red-500 w-10 h-10 flex-grow"></div>
  <div class="bg-blue-500 w-10 h-10 flex-grow"></div>
</div>
```
Choose the solution that best fits your layout requirements.  For simply preventing vertical stacking while maintaining explicit width, `flex-shrink-0` is the cleaner approach.