let participantCount = 1;

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];

    const total = feeElements.reduce((sum, feeInput) => {
      return sum + (parseFloat(feeInput.value) || 0);
    }, 0);

    return total;
}

function successTemplate(info) {
    return `
      <p>Thank you, ${info.adultName}, for registering.</p>
      <p>You have registered ${info.numParticipants} participants.</p>
      <p>The total fees amount to $${info.totalFees.toFixed(2)}.</p>
    `;
}

function participantTemplate(count) {
    return `
        <section class="participant${count}">
              <p>Participant ${count}</p>
              <div class="item">
                <label for="fname1">First Name<span>*</span></label>
                <input id="fname1" type="text" name="fname1" value="" required />
              </div>
              <div class="item activities">
                <label for="activity1">Activity #<span>*</span></label>
                <input id="activity1" type="text" name="activity1" />
              </div>
              <div class="item">
                <label for="fee1">Fee ($)<span>*</span></label>
                <input id="fee1" type="number" name="fee1" />
              </div>
              <div class="item">
                <label for="date1">Desired Date <span>*</span></label>
                <input id="date1" type="date" name="date1" />
              </div>
              <div class="item">
                <p>Grade</p>
                <select id="grade1" name="grade1">
                  <option selected value="" disabled selected></option>
                  <option value="1">1st</option>
                  <option value="2">2nd</option>
                  <option value="3">3rd</option>
                  <option value="4">4th</option>
                  <option value="5">5th</option>
                  <option value="6">6th</option>
                  <option value="7">7th</option>
                  <option value="8">8th</option>
                  <option value="9">9th</option>
                  <option value="10">10th</option>
                  <option value="11">11th</option>
                  <option value="12">12th</option>
                </select>
              </div>
            </section>
    `;
}

function addParticipant(event) {
    event.preventDefault();
    participantCount++;
    const participantsFieldset = document.getElementById("participantsFieldset");
    const newParticipant = participantTemplate(participantCount);
    participantsFieldset.insertAdjacentHTML('beforeend', newParticipant);
}

function submitForm(event) {
    event.preventDefault();
    const adultName = document.getElementById("adult_name").value;
    const feeInputs = document.querySelectorAll("input[id^='fee']");
    const numParticipants = feeInputs.length;
    const total = totalFees();

    const info = {
        adultName: adultName,
        numParticipants: numParticipants,
        totalFees: total
    };

    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("summary").style.display = "block";
    document.getElementById("summary").innerHTML = successTemplate(info);
}

document.getElementById("registrationForm").addEventListener("submit", submitForm);
document.getElementById("addParticipantButton").addEventListener("click", addParticipant);
