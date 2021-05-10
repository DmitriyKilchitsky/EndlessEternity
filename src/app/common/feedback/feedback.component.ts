import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackComponent implements OnInit {
  private readonly _requestUrl: string = 'https://formspree.io/f/meqvajza';
  private _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public form: FormGroup;
  public isLoading: Observable<boolean> = this._isLoading$.asObservable();

  public get requestValue(): IRequestData {
    return this.form.value;
  }
  public get isFormInvalid(): boolean {
    return this.form.invalid;
  }

  constructor(
    private _fb: FormBuilder,
    private _httpClient: HttpClient,
    private _cd: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this._initForm();
  }

  public sendEmail(): void {
    if (this.isFormInvalid) {
      return;
    }

    this._isLoading$.next(true);

    this._httpClient.post(this._requestUrl, this.requestValue)
      .pipe(
        finalize(() => {
          this._isLoading$.next(false);
          this._resetForm();
        })
      )
      .subscribe();
  }

  private _initForm(): void {
    this.form = this._fb.group({
      user_name: ['', Validators.required],
      user_email: ['', [Validators.required, Validators.email]],
      user_subject: ['', Validators.required],
      user_message: ['', Validators.required],
    });
  }

  private _resetForm(): void {
    const initialForm: IRequestData = {
      user_name: '',
      user_email: '',
      user_subject: '',
      user_message: '',
    }

    this.form.setValue(initialForm, { emitEvent: false });
    this._cd.markForCheck();
  }
}

export interface IRequestData {
  user_name: string;
  user_email: string;
  user_subject: string;
  user_message: string;
}
