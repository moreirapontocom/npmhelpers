# Components

### Alert
### Confirm
### DownloadXlsx
### buildXlsx
### Expander
### Loading
### CustomModal

### Popover

```typescript
<CustomPopover
  header="Header"
  body="body">
    Alguma coisa aqui dentro
</CustomPopover>
```

### Separator

### TextWithTooltip

```typescript
<TextWithTooltip
  id="unique-id"
  tooltip="Tooltip text">
    Children (button, link, text, etc)
</TextWithTooltip>
```

### Upload

# Contexts

### AlertContext
### AlertProvider
### UserContext
### UserProvider
### ConfirmContext
### ConfirmProvider

# Helpers

### convertFirebaseTimestampToString
### convertUrlToLink
### copyToClipboard
### currencies
### currencyFormatter
### detectUrlInString
### formatBytes
### formatNumberToCurrency
### generateGoogleCalendarLink
### generateRandomNumber
### generateRandomString
### getCurrencyDetails
### hideEmail
### isCPFValid

```typescript
isCPFValid("01234567890"); // true
isCPFValid("12345"); // false
```

### isDOB
### isValidEmail

```typescript
isValidEmail("email@domain.com"); // true
isValidEmail("email@domain"); // false
isValidEmail("email.com"); // false
```

### isValidUrl

```typescript
isValidUrl("https://google.com"); // true
isValidUrl("google.com"); // true
isValidUrl("google@com"); // false
```

### onlyNumbers

```typescript
const phone: any = "+1 (805) 123-456";
onlyNumbers(phone); // 1805123456
```

### openWhatsappChat
### removeDuplicatesFromArray
### shareToWhatsapp
### sleep
### slugifyString

```typescript
const str: string = "This is my super-cool string"
slugifyString(str); // this-is-my-super-cool-string
```
### truncateString