# Test Cases: Wise

## Security

### TC-SEC-001: Verify passcode setup and confirmation during onboarding

- **Priority:** P1
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Wise 9.82
- **Preconditions:** App installed, user reached the "Stay secure" step of onboarding
- **Test data:** A valid 4-digit passcode
- **Steps:**
  1. On the "Stay secure" step, tap "Set passcode".
  2. Enter a 4-digit passcode.
  3. Re-enter the same passcode on the confirmation screen.
- **Expected result:** The passcode is set successfully and the user proceeds to the next onboarding step.

### TC-SEC-002: Verify Face ID setup during onboarding

- **Priority:** P1
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Wise 9.82
- **Preconditions:** App installed, user on the "Stay secure" step, device has Face ID enrolled
- **Test data:** None
- **Steps:**
  1. On the "Stay secure" step, tap "Set up Face ID".
  2. Complete the Face ID scan when prompted.
- **Expected result:** Face ID setup is completed successfully and the user proceeds to the next onboarding step.

### TC-SEC-003: Verify a warning is shown when the user disables security notifications

- **Priority:** P1
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Wise 9.82
- **Preconditions:** App installed, user on the "communication preferences" step, security notifications toggle is on
- **Test data:** None
- **Steps:**
  1. On the communication preferences step, tap the security notifications toggle to turn it off.
- **Expected result:** A security warning ("Turning off notifications may impact your security") is displayed when the toggle is turned off.

## Onboarding & Account

### TC-ONB-001: Verify account type selection during onboarding

- **Priority:** P2
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Wise 9.82
- **Preconditions:** App installed, user signed in, on the "What kind of account" step
- **Test data:** Personal account
- **Steps:**
  1. On the "What kind of account would you like to open" step, tap "Personal account".
- **Expected result:** The personal account type is selected and the user proceeds to the next step.

### TC-ONB-002: Verify available features are shown correctly for the selected country

- **Priority:** P2
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Wise 9.82
- **Preconditions:** App installed, user on the "where do you live" step
- **Test data:** Country = Turkey
- **Steps:**
  1. On the "where do you live most of the time" step, select "Turkey".
  2. Tap "Continue".
- **Expected result:** Only available features are marked usable (send money abroad), and unavailable features (hold money, receive money, card, spend abroad) are clearly labeled "not available yet".

## Transfer Flow

### TC-TRF-001: Verify the fee and recipient amount are calculated correctly

- **Priority:** P2
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Wise 9.82
- **Preconditions:** App installed, onboarding completed, user on the transfer screen
- **Test data:** Send 250 TRY, recipient in Germany (EUR)
- **Steps:**
  1. On the transfer screen, set the recipient country to Germany.
  2. Enter 250 in the "You send" field.
- **Expected result:** The recipient amount and applicable fee are displayed using the current exchange rate and Wise fee calculation.

### TC-TRF-002: Verify the send currency can be changed

- **Priority:** P2
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Wise 9.82
- **Preconditions:** App installed, onboarding completed, user on the transfer screen
- **Test data:** Change send currency from TRY to EUR
- **Steps:**
  1. On the transfer screen, tap the currency selector on the "You send" field.
  2. Select "EUR" from the currency list.
- **Expected result:** The "You send" currency changes to EUR and the displayed transfer amounts are recalculated.

### TC-TRF-003: Verify a warning is shown when the amount is below the minimum

- **Priority:** P2
- **Type:** Boundary
- **Environment:** iPhone 13, iOS 26.5.2, Wise 9.82
- **Preconditions:** App installed, onboarding completed, user on the transfer screen
- **Test data:** Send an amount that converts below 0.01 EUR
- **Steps:**
  1. On the transfer screen, set the recipient country to Germany.
  2. Enter an amount below the minimum in the "You send" field.
  3. Tap "Send".
- **Expected result:** A minimum amount warning is displayed ("The smallest amount a recipient can get is 0.01 EUR") and the user cannot proceed.

## Validation

### TC-VAL-001: Verify the transfer cannot proceed with an invalid amount

- **Priority:** P2
- **Type:** Negative
- **Environment:** iPhone 13, iOS 26.5.2, Wise 9.82
- **Preconditions:** App installed, onboarding completed, user on the transfer screen
- **Test data:** Amount = 0
- **Steps:**
  1. On the transfer screen, set the recipient country to Germany.
  2. Enter 0 in the "You send" field.
- **Expected result:** The Send button remains disabled and the transfer cannot be submitted.

### TC-VAL-002: Verify address field handling during onboarding

- **Priority:** P2
- **Type:** Negative
- **Environment:** iPhone 13, iOS 26.5.2, Wise 9.82
- **Preconditions:** App installed, user on the "enter your address" step
- **Test data:** An incomplete address (for example a street name with no building number)
- **Steps:**
  1. On the address step, enter an incomplete address in the search field.
  2. Tap "Confirm and continue".
- **Expected result:** The user cannot continue and an address validation message is displayed.