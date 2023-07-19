(()=>{"use strict";function e(e="",t="",n="",d=""){const r=document.getElementById("content"),i=document.createElement("form"),o=document.querySelector("button");r.removeChild(o);const c=i.appendChild(document.createElement("input"));c.setAttribute("type","text"),c.setAttribute("name","title"),c.setAttribute("placeholder","Title"),c.setAttribute("id","title"),c.value=e;const l=i.appendChild(document.createElement("input"));l.setAttribute("type","text"),l.setAttribute("name","desc"),l.setAttribute("placeholder","Description"),l.setAttribute("id","desc"),l.value=t;const a=i.appendChild(document.createElement("input"));a.setAttribute("type","date"),a.setAttribute("name","date"),a.setAttribute("placeholder","Due Date"),a.setAttribute("id","date"),a.value=n;const u=i.appendChild(document.createElement("input"));u.setAttribute("type","number"),u.setAttribute("name","number"),u.setAttribute("placeholder","Priority"),u.setAttribute("id","priority"),u.value=d;const s=i.appendChild(document.createElement("input"));s.setAttribute("type","submit"),s.textContent="Submit",s.addEventListener("click",(()=>{r.appendChild(o);let e=0;for(;localStorage.getItem(e);)e+=1;const t={title:document.getElementById("title").value,desc:document.getElementById("desc").value,date:document.getElementById("date").value,priority:document.getElementById("priority").value};window.dispatchEvent(new StorageEvent("storage",{key:e,newValue:JSON.stringify(t),url:window.location.href,storageArea:localStorage})),r.removeChild(i),event.preventDefault()})),r.appendChild(i)}document.querySelector("button").addEventListener("click",(()=>{e()})),window.addEventListener("storage",(t=>{!function(t){const n=document.querySelector("tbody"),d=document.createElement("tr");Object.values(t).forEach((e=>{const t=document.createElement("td");t.textContent=e,d.appendChild(t)}));const r=document.createElement("td"),i=r.appendChild(document.createElement("img"));i.src="pencil-pictogram.svg",i.style="height: 20px;",d.appendChild(r),r.addEventListener("click",(()=>{const t=Array.from(d.children);n.removeChild(d),e(t[0].textContent,t[1].textContent,t[2].textContent,t[3].textContent)}));const o=document.createElement("td");o.textContent="X",o.style="background-color: red;",d.appendChild(o),o.addEventListener("click",(()=>{n.removeChild(d)})),n.appendChild(d)}(JSON.parse(t.newValue))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcvQixZQUFhK0IsRUFBSSxHQUFHL0IsWUFBYStCLEVBQUksR0FBRy9CLFlBQVksSUFHekYsTUFBTW1DLEVBQU1sRCxTQUFTRyxjQUFjLE1BQ25DK0MsRUFBSW5DLFlBQWMsSUFDbEJtQyxFQUFJTCxNQUFRLHlCQUNaVCxFQUFJNUIsWUFBWTBDLEdBQ2hCQSxFQUFJbEMsaUJBQWlCLFNBQVMsS0FDNUJtQixFQUFNN0IsWUFBWThCLEVBQUksSUFHeEJELEVBQU0zQixZQUFZNEIsRUFDcEIsQ0RyQkVlLENBQVF6QixLQUFLMEIsTUFBTXBCLEVBQU1QLFVBQVUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9hZGQtaXRlbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2Rpc3BsYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRJdGVtKHQgPSAnJywgZCA9ICcnLCBkYSA9ICcnLCBwID0gJycpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICBjb250ZW50LnJlbW92ZUNoaWxkKGJ1dHRvbik7XG5cbiAgY29uc3QgdGl0bGUgPSBmb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gIHRpdGxlLnZhbHVlID0gdDtcblxuICBjb25zdCBkZXNjID0gZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcbiAgZGVzYy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBkZXNjLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjJyk7XG4gIGRlc2Muc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpO1xuICBkZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzYycpO1xuICBkZXNjLnZhbHVlID0gZDtcblxuICBjb25zdCBkYXRlID0gZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcbiAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XG4gIGRhdGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEdWUgRGF0ZScpO1xuICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xuICBkYXRlLnZhbHVlID0gZGE7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsICdudW1iZXInKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcmlvcml0eScpO1xuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XG4gIHByaW9yaXR5LnZhbHVlID0gcDtcblxuICBjb25zdCBzdWJtaXQgPSBmb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBzdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBsZXQgeCA9IDA7XG4gICAgd2hpbGUgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHgpKSB7XG4gICAgICB4ICs9IDE7XG4gICAgfVxuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIHRpdGxlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZSxcbiAgICAgIGRlc2M6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjJykudmFsdWUsXG4gICAgICBkYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlLFxuICAgICAgcHJpb3JpdHk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlLFxuICAgIH07XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IFN0b3JhZ2VFdmVudCgnc3RvcmFnZScsIHtcbiAgICAgIGtleTogeCxcbiAgICAgIG5ld1ZhbHVlOiBKU09OLnN0cmluZ2lmeShvYmopLFxuICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgIHN0b3JhZ2VBcmVhOiBsb2NhbFN0b3JhZ2UsXG4gICAgfSkpO1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZm9ybSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcbn1cbiIsImltcG9ydCBBZGRJdGVtIGZyb20gJy4vYWRkLWl0ZW0nO1xuaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9kaXNwbGF5JztcblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIEFkZEl0ZW0oKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIChldmVudCkgPT4ge1xuICBkaXNwbGF5KEpTT04ucGFyc2UoZXZlbnQubmV3VmFsdWUpKTtcbn0pO1xuIiwiaW1wb3J0IEFkZEl0ZW0gZnJvbSAnLi9hZGQtaXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXkoaW5mbykge1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIE9iamVjdC52YWx1ZXMoaW5mbykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGRhdGEudGV4dENvbnRlbnQgPSBlbGVtZW50O1xuICAgIHJvdy5hcHBlbmRDaGlsZChkYXRhKTtcbiAgfSk7XG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBjb25zdCBpbWcgPSBlZGl0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpKTtcbiAgaW1nLnNyYyA9ICdwZW5jaWwtcGljdG9ncmFtLnN2Zyc7XG4gIGltZy5zdHlsZSA9ICdoZWlnaHQ6IDIwcHg7JztcbiAgcm93LmFwcGVuZENoaWxkKGVkaXQpO1xuICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGFyciA9IEFycmF5LmZyb20ocm93LmNoaWxkcmVuKTtcbiAgICB0YWJsZS5yZW1vdmVDaGlsZChyb3cpO1xuICAgIEFkZEl0ZW0oYXJyWzBdLnRleHRDb250ZW50LCBhcnJbMV0udGV4dENvbnRlbnQsIGFyclsyXS50ZXh0Q29udGVudCwgYXJyWzNdLnRleHRDb250ZW50KTtcbiAgfSk7XG5cbiAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgZGVsLnRleHRDb250ZW50ID0gJ1gnO1xuICBkZWwuc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmVkOyc7XG4gIHJvdy5hcHBlbmRDaGlsZChkZWwpO1xuICBkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGFibGUucmVtb3ZlQ2hpbGQocm93KTtcbiAgfSk7XG5cbiAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbn1cbiJdLCJuYW1lcyI6WyJBZGRJdGVtIiwidCIsImQiLCJkYSIsInAiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZvcm0iLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvciIsInJlbW92ZUNoaWxkIiwidGl0bGUiLCJhcHBlbmRDaGlsZCIsInNldEF0dHJpYnV0ZSIsInZhbHVlIiwiZGVzYyIsImRhdGUiLCJwcmlvcml0eSIsInN1Ym1pdCIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIngiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib2JqIiwid2luZG93IiwiZGlzcGF0Y2hFdmVudCIsIlN0b3JhZ2VFdmVudCIsImtleSIsIm5ld1ZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInVybCIsImxvY2F0aW9uIiwiaHJlZiIsInN0b3JhZ2VBcmVhIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImluZm8iLCJ0YWJsZSIsInJvdyIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJlbGVtZW50IiwiZGF0YSIsImVkaXQiLCJpbWciLCJzcmMiLCJzdHlsZSIsImFyciIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwiZGVsIiwiZGlzcGxheSIsInBhcnNlIl0sInNvdXJjZVJvb3QiOiIifQ==