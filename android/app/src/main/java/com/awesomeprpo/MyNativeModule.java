package com.awesomeprpo;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MyNativeModule extends ReactContextBaseJavaModule {

    MyNativeModule(ReactApplicationContext reactApplicationContext){
        super(reactApplicationContext);
    }
    @NonNull
    @Override
    public String getName() {
        return "CustomModule";
    }

    @ReactMethod
    public void printMethod(){
        Log.d("MyNativeModule", "printMethod: clicked");
    }
}
